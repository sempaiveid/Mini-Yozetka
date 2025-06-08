import { Event } from '@angular/router';
import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-tile-price',
  imports: [],
  templateUrl: './tile-price.component.html',
  styleUrl: './tile-price.component.css'
})
export class TilePriceComponent {
  productSet: CartService = inject(CartService);
  

  @Input() name: string = ""
  @Input() price: number = 0
  @Input() product: any;

  booleanText = true;

  addToCart(product: any) {
    let isCart: any = this.productSet.productCart.some((el: any) => el.id === product.id)
    if (!isCart) {
      this.productSet.productCart = product;
    }
    else {
      this.productSet.deleteItem(product.id)
    }

  }
  buttonClick(button: HTMLElement): void {
   
    let text = button.querySelector(".buyTxt");
    this.booleanText = !this.booleanText

    if (!this.booleanText) {
      text!.textContent = "Додано в корзину";
    } else if (this.booleanText) {
      text!.textContent = "Купити";
    }
//localStorage.clear()
  }
}

