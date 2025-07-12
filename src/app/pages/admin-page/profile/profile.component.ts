import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService, Product } from '../../../services/product.service';
import { LoginService } from '../../../services/login.service';
import { AuthService } from '../../../services/auth.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { imageExistsValidator } from '../../../validators/image-exists.validator';
import { take } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, RouterModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  loginService = inject(LoginService);
  productService = inject(ProductService);
  authService = inject(AuthService);

  addProductForm = new FormBuilder().group({
    name_product: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁёҐґЄєІіЇї\s]+$/), Validators.minLength(4)]],
    image_product: ['', [Validators.required], [imageExistsValidator()]],
    description_product: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яІіЇїЄєҐґЁё0-9\s]+$/), Validators.minLength(5)]],
    price_product: [null, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
    category_product: ['', [Validators.required]],
    currency_price_product: ['hryvnia', [Validators.required]]
  });

  user_products: Product[] = [];
  productToDelete: string | null = null;

  dollar = 41.30;
  euro = 47.72;

  ngOnInit() {
    this.loginService.user$.pipe(take(1)).subscribe(user => {
      if (user) {
        this.user_products = this.productService.find_uploader(user.login);
      }
    });
  }

  addProduct() {
    if (this.addProductForm.invalid) {
      this.addProductForm.markAllAsTouched();
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
      price: 0
    };

    const price = Number(this.addProductForm.value.price_product);
    switch (this.addProductForm.value.currency_price_product) {
      case 'hryvnia': product.price = price; break;
      case 'dollar': product.price = price * Math.ceil(this.dollar); break;
      case 'euro': product.price = price * Math.ceil(this.euro); break;
    }

    this.productService.addProduct = product;
    this.user_products = this.productService.find_uploader(user.login);
    this.addProductForm.reset();
    this.addProductForm.patchValue({ currency_price_product: 'hryvnia', category_product: '' });
  }

  confirmDelete(productId: string) {
    this.productToDelete = productId;
  }

  cancelDelete() {
    this.productToDelete = null;
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId);
    const user = this.loginService.getUser();
    if (user) {
      this.user_products = this.productService.find_uploader(user.login);
    }
    this.productToDelete = null;
  }

  logout() {
    this.authService.logout();
  }
}
