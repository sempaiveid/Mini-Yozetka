import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../services/product.service';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  productService: ProductService = inject(ProductService);
  addProductForm = new FormBuilder().group({
    name_product : ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё\s]+$/), Validators.minLength(4)]],
    image_product: ['', [Validators.required]],
    description_product: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё0-9\s]+$/), Validators.minLength(5)]],
    price_product:[ 0 , [Validators.required, Validators.pattern(/^\d+$/), Validators.pattern(/^[1-9][0-9]*$/)]]
  })
  
  addProduct(){
    if (this.addProductForm.invalid) {
      this.addProductForm.markAllAsTouched();
      return;
    }

    const product:Product = {
      id: '',
      name: this.addProductForm.controls.name_product.value as string,
      picture: this.addProductForm.controls.image_product.value as string,
      price: this.addProductForm.controls.price_product.value as number,
      category:"No Category",
      description: this.addProductForm.controls.description_product.value as string,
    };

    this.productService.addProduct = product;
    this.addProductForm.reset();
  }
}
