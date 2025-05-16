import { Component } from '@angular/core';
import { ItemInCartComponent } from '../../components/item-in-cart/item-in-cart.component';

@Component({
  selector: 'app-cart-page',
  imports: [ItemInCartComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

}
