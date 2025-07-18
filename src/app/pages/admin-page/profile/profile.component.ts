import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
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
  imports: [ReactiveFormsModule, NgFor, NgIf, RouterModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  loginService = inject(LoginService);
  productService = inject(ProductService);
  authService = inject(AuthService);
  http = inject(HttpClient);

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
      null,
      [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)],
    ],
    category_product: ['', [Validators.required]],
    currency_price_product: ['hryvnia', [Validators.required]],
  });

  user_products: Product[] = [];
  productToDelete: string | null = null;

  dollar = 41.3;
  euro = 47.72;

  ngOnInit() {
    this.loginService.user$.pipe(take(1)).subscribe(async (user) => {
      if (user) {
        await this.http
          .get<any>('http://localhost:3000/adminProduct', {
            withCredentials: true,
          })
          .subscribe((data) => {
            this.user_products = data;
            console.log(data);
          });
      }
    });
  }

  async addProduct() {
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
    this.http
      .patch(
        'http://localhost:3000/addProduct',
        {
          product: product,
          user: user,
        },
        { withCredentials: true }
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.user_products = await this.productService.find_uploader(user.login);
    this.addProductForm.reset();
    this.addProductForm.patchValue({
      currency_price_product: 'hryvnia',
      category_product: '',
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
      const data = await firstValueFrom(
        this.http.get<any>('http://localhost:3000/adminProduct', {
          withCredentials: true,
        })
      );

      this.user_products = Array.isArray(data) ? data : [];
      this.productToDelete = null;
    }
  }

  logout() {
    this.authService.logout();
  }
}
