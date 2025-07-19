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
import { firstValueFrom } from 'rxjs';

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
  productCard: any[] = [];
  productSet: any = this.product.productCart;
  inputCount = 1;
  http = inject(HttpClient);
  modal = false;
  total = 0;
  async loadCart() {
    let data = await firstValueFrom(
      this.http.get<any[]>('http://localhost:3000/getCart', {
        withCredentials: true,
      })
    );
    this.productCard = data;
  }

  buy() {
    this.modal = !this.modal;
  }
  clearCart() {
    this.product.resetCart();
    this.product.newCout();
    this.productCard = [];
  }
  constructor() {
    this.cartTemplate = document.querySelector('.main-cart') as HTMLElement;
  }
  async ngOnInit() {
    this.loadCart();
    this.product.getTotalPriceObservable().subscribe((value) => {
      this.total = value;
    });
  }
}
