import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../../services/product.service';
import { LoginService } from '../../../services/login.service';
import { AuthService } from '../../../services/auth.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { imageExistsValidator } from '../../../validators/image-exists.validator';
import { firstValueFrom, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, RouterModule, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  loginService = inject(LoginService);
  productService = inject(ProductService);
  authService = inject(AuthService);
  http = inject(HttpClient);

  isEditMode:boolean = false;

  avatar_icon?: string;
  change:boolean = false;

  searchQuery: string = '';
  filteredProducts: Product[] = [];


  addProductForm = new FormBuilder().group({
    name_product: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-яЁёҐґЄєІіЇї\s]+$/),
        Validators.minLength(4),
      ],
    ],
    image_product: ['', [Validators.required], [imageExistsValidator()]],
    description_product: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-яІіЇїЄєҐґЁё0-9\s]+$/),
        Validators.minLength(5),
      ],
    ],
    price_product: [
      null as number | null,
      [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)],
    ],
    category_product: ['', [Validators.required]],
    currency_price_product: ['hryvnia', [Validators.required]],
  });

  user_products: Product[] = [];
  productToDelete: string | null = null;
  editedProduct: Product | null = null;

  dollar = 41.3;
  euro = 47.72;

  ngOnInit() {
    this.loginService.user$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.loadUserProducts();
      }
    });
  }

  filterProducts() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.user_products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }



  async addProduct() {
    if (this.addProductForm.invalid) {
      this.addProductForm.markAllAsTouched();
      return;
    }

    if (this.isEditMode) {
      await this.updateProduct();
      return;
    }

    const user = this.loginService.getUser();
    if (!user) return;

    const product: Product = {
      id: '',
      name: this.addProductForm.value.name_product!,
      picture: this.addProductForm.value.image_product!,
      description: { text: this.addProductForm.value.description_product! },
      category: this.addProductForm.value.category_product!,
      uploader: user.login,
      price: 0,
    };
    const price = Number(this.addProductForm.value.price_product);
    switch (this.addProductForm.value.currency_price_product) {
      case 'hryvnia':
        product.price = price;
        break;
      case 'dollar':
        product.price = price * Math.ceil(this.dollar);
        break;
      case 'euro':
        product.price = price * Math.ceil(this.euro);
        break;
    }

    this.productService.addProduct = product;
    await firstValueFrom(
      this.http.patch(
        'http://localhost:3000/addProduct',
        {
          product: product,
          user: user,
        },
        { withCredentials: true }
      )
  );


  const data = await firstValueFrom(
    this.http.get<any>('http://localhost:3000/adminProduct', {
      withCredentials: true,
    })
  );

    this.user_products = Array.isArray(data) ? data : [];
    this.filteredProducts = [...this.user_products];
    this.addProductForm.reset({
      name_product: '',
      image_product: '',
      description_product: '',
      price_product: null,
      category_product: '',
      currency_price_product: 'hryvnia'
    });
  }


  async updateProduct() {
  if (!this.editedProduct) return;

  const user = this.loginService.getUser();
  if (!user) return;

  const updatedProduct: Product = {
    ...this.editedProduct,
    name: this.addProductForm.value.name_product!,
    picture: this.addProductForm.value.image_product!,
    description: { text: this.addProductForm.value.description_product! },
    category: this.addProductForm.value.category_product!,
    uploader: this.editedProduct.uploader,
    price: 0
  };

  const price = Number(this.addProductForm.value.price_product);
  switch (this.addProductForm.value.currency_price_product) {
    case 'hryvnia':
      updatedProduct.price = price;
      break;
    case 'dollar':
      updatedProduct.price = price * Math.ceil(this.dollar);
      break;
    case 'euro':
      updatedProduct.price = price * Math.ceil(this.euro);
      break;
  }

  await firstValueFrom(
    this.http.patch(
      'http://localhost:3000/updateProduct',
      { product: updatedProduct, user },
      { withCredentials: true }
    )
  );

  await this.loadUserProducts();
  this.cancelEdit();
}


  startEdit(product: Product) {
    this.editedProduct = { ...product };
    this.isEditMode = true;

    this.addProductForm.patchValue({
      name_product: product.name,
      image_product: product.picture,
      description_product: (product.description as any).text || '',
      price_product: product.price,
      category_product: product.category,
      currency_price_product: 'hryvnia'
    });
  }

  cancelEdit() {
    this.isEditMode = false;
    this.editedProduct = null;
    this.addProductForm.reset({
      name_product: '',
      image_product: '',
      description_product: '',
      price_product: null,
      category_product: '',
      currency_price_product: 'hryvnia'
    });
  }



  loadUserProducts() {
  this.http.get<any>('http://localhost:3000/adminProduct', {
    withCredentials: true,
  }).subscribe((data) => {
    this.user_products = Array.isArray(data) ? data : [];
    this.filteredProducts = [...this.user_products];
  });
}



  confirmDelete(productId: string) {
    this.productToDelete = productId;
  }

  cancelDelete() {
    this.productToDelete = null;
  }

  async deleteProduct(productId: string) {
    const user = this.loginService.getUser();
    if (user) {
      await this.productService.deleteProduct(productId, user);
      this.loadUserProducts();
      this.productToDelete = null;
    }
  }

  changeAvatar() {
  if (!this.avatar_icon) return;

  this.http.post<any>(
    "http://localhost:3000/changeAva",
    {
      avatar: this.avatar_icon
    },
    { withCredentials: true }
  ).subscribe(() => {
    window.location.reload();
  });
}



  logout() {
    this.authService.logout();
  }
}
