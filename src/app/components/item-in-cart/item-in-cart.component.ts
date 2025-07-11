import { Component, inject } from '@angular/core';
import { PoputMenuComponent } from './poput-menu/poput-menu.component';
import { CounterProductComponent } from './counter-product/counter-product.component';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '../../pipes/currency-convert.pipe';
import { HttpClient } from '@angular/common/http';
import { BuyMenuComponent } from './buy-menu/buy-menu.component';

@Component({
  selector: 'app-item-in-cart',
  imports: [
    PoputMenuComponent,
    CounterProductComponent,
    NgFor,
    RouterModule,
    NgIf,
    CurrencyPipe,
    BuyMenuComponent,
  ],
  templateUrl: './item-in-cart.component.html',
  styleUrl: './item-in-cart.component.css',
})
export class ItemInCartComponent {
  cartTemplate: HTMLElement;
  product: CartService = inject(CartService);
  productCard: any[] = this.product.productCart;
  productSet: any = this.product.productCart;
  inputCount = 1;
  http = inject(HttpClient);
  modal = false;
  // loadCart() {
  //   this.http.get<any[]>('http://localhost:3000/cart').subscribe((data)=>{
  //     this.productCard = data
  //     console.log(data)
  //   });
  // }

  buy() {
    this.modal = !this.modal;
  }
  clearCart() {
    this.product.resetCart();
    this.productCard = [];
  }
  constructor() {
    this.cartTemplate = document.querySelector('.main-cart') as HTMLElement;
  }
  ngOnInit() {
    // this.loadCart();
  }
}
