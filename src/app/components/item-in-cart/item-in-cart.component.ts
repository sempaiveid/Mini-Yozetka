import { Component, inject } from '@angular/core';
import { PoputMenuComponent } from './poput-menu/poput-menu.component';
import { CounterProductComponent } from './counter-product/counter-product.component';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '../../pipes/currency-convert.pipe';

@Component({
  selector: 'app-item-in-cart',
  imports: [PoputMenuComponent, CounterProductComponent, NgFor, RouterModule, NgIf, CurrencyPipe],
  templateUrl: './item-in-cart.component.html',
  styleUrl: './item-in-cart.component.css'
})
export class ItemInCartComponent {
  cartTemplate: HTMLElement
  product: CartService = inject(CartService)
  productCard = this.product.productCart
  inputCount = 1
  isBuy = false

  buy() {
    this.product.resetCart()
    this.productCard = []
    this.isBuy = true
    setTimeout(() => this.isBuy = false,1500)
  }
  clearCart() {
    this.product.resetCart()
    this.productCard = []

  }
  constructor() {
    this.cartTemplate = document.querySelector(".main-cart") as HTMLElement
  }
}
