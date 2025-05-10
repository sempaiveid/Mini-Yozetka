import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cart: CartService = inject(CartService);
  
   setNewProd(){
    this.cart.productCart = {name : "gamePad", price: 24};
   } 
  
   constructor(){
    this.setNewProd();
    console.log(this.cart.productCart);
  }
 
}
