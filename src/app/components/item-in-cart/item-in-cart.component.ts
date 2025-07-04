import { Component, inject } from '@angular/core';
import { PoputMenuComponent } from './poput-menu/poput-menu.component';
import { CounterProductComponent } from './counter-product/counter-product.component';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '../../pipes/currency-convert.pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-in-cart',
  imports: [
    PoputMenuComponent,
    CounterProductComponent,
    NgFor,
    RouterModule,
    NgIf,
    CurrencyPipe,
  ],
  templateUrl: './item-in-cart.component.html',
  styleUrl: './item-in-cart.component.css',
})
export class ItemInCartComponent {
  cartTemplate: HTMLElement;
  product: CartService = inject(CartService);
  productCard : any =[];
  productSet: any = this.product.productCart;
  inputCount = 1;
  isBuy = false;
  http = inject(HttpClient);
  loadCart() {
    this.http.get<any[]>('http://localhost:3000/cart').subscribe((data)=>{
      this.productCard = data
      console.log(data)
    });
  }

  buy() {
    this.product.resetCart();
    this.productCard = [];
    this.isBuy = true;
    setTimeout(() => (this.isBuy = false), 1500);
  }
  clearCart() {
    this.product.resetCart();
    this.productCard = [];
  }
  constructor() {
    this.cartTemplate = document.querySelector('.main-cart') as HTMLElement;
  }
  ngOnInit() {
    this.loadCart();
  }
}
