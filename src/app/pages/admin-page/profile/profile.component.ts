import { LoginService } from './../../../services/login.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { imageExistsValidator } from '../../../validators/image-exists.validator';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule , NgFor, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  productService: ProductService = inject(ProductService);
  loginService: LoginService = inject(LoginService);

  addProductForm = new FormBuilder().group({
    name_product : ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё\s]+$/), Validators.minLength(4)]],
    image_product: ['', [Validators.required], [imageExistsValidator()]],
    description_product: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё0-9\s]+$/), Validators.minLength(5)]],
    price_product:[ null , [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
    category_product:['', [Validators.required]],
    currency_price_product:['', [Validators.required]]
  })
  
  dollar: number = 41.30;
  euro: number = 47.72;
  

  user_products:Product[] = [];

  productToDelete: string | null = null;

  ngOnInit(){
    this.addProductForm.get('currency_price_product')?.setValue('hryvnia');
    this.addProductForm.get('category_product')?.setValue('');
  }

  constructor(){
    this.update_user_products();
  }

  update_user_products(){
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if(user){
      this.user_products = this.productService.find_uploader(user.login);
    }
  }
  
  addProduct(){
    if (this.addProductForm.invalid) {
      this.addProductForm.markAllAsTouched();
      return;
    }

    const product:Product = {
      id: '',
      name: this.addProductForm.controls.name_product.value as string,
      picture: this.addProductForm.controls.image_product.value as string,
      price: 0 as number,
      category:this.addProductForm.controls.category_product.value as string,
      description: {text: this.addProductForm.controls.description_product.value as string} as object,
      uploader: this.loginService.user.login as string,
    };
    console.log(this.addProductForm.controls.currency_price_product.value);

    const price = Number(this.addProductForm.controls.price_product.value);
    switch(this.addProductForm.controls.currency_price_product.value){
      case "hryvnia": product.price = price as number; break;
      case "dollar": product.price = price as number *  Math.ceil(this.dollar) as number; break;
      case "euro": product.price = price *  Math.ceil(this.euro) as number; break;
      default: throw new Error('Неверная валюта выбрана');
    }

    this.productService.addProduct = product;
    this.loginService.add_user_product(this.productService.find_uploader(product.uploader));
    this.addProductForm.reset();
    this.update_user_products();
    this.addProductForm.get('currency_price_product')?.setValue('hryvnia');
    this.addProductForm.get('category_product')?.setValue('');
  }

  confirmDelete(productId: string) {
    this.productToDelete = productId;
  }

  cancelDelete() {
    this.productToDelete = null;
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId);
    this.update_user_products();
    this.productToDelete = null;
  }

}
