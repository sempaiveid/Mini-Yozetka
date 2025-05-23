import { Component, inject } from '@angular/core';
import { PoputMenuComponent } from './poput-menu/poput-menu.component';
import { CounterProductComponent } from './counter-product/counter-product.component';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-in-cart',
  imports: [PoputMenuComponent, CounterProductComponent, NgFor, RouterModule, NgIf],
  templateUrl: './item-in-cart.component.html',
  styleUrl: './item-in-cart.component.css'
})
export class ItemInCartComponent {
  cartTemplate: HTMLElement
  product: CartService = inject(CartService)
  productCard = this.product.productCart
  inputCount = 1
  clearCart() {
    this.product.resetCart()
    this.productCard = []

  }
  constructor() {
    this.cartTemplate = document.querySelector(".main-cart") as HTMLElement
  }
}
