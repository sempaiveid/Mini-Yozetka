import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from '../../../pages/cart-page/cart-page.component';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-counter-product',
  imports: [ReactiveFormsModule],
  templateUrl: './counter-product.component.html',
  styleUrl: './counter-product.component.css'
})
export class CounterProductComponent {
  cardService: CartService = inject(CartService)
  @Input() inputCount = 1
  countPlus() {
    this.inputCount += 1
  }
  countMinuse() {
    if (this.inputCount <= 1) {
      this.inputCount = 1
      return
    }
    this.inputCount -= 1

  }
}
