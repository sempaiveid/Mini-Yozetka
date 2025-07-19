import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from '../../../pages/cart-page/cart-page.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-counter-product',
  imports: [ReactiveFormsModule],
  templateUrl: './counter-product.component.html',
  styleUrl: './counter-product.component.css',
})
export class CounterProductComponent {
  cardService: CartService = inject(CartService);
  @Input() inputCount = 1;
  @Output() quantityChanged = new EventEmitter<void>();
async  countPlus(event: Event) {
    if (this.inputCount > 999) {
      this.inputCount = 999;
      return;
    }
    this.inputCount += 1;
    const target = event?.target as HTMLElement;
    const id = target.closest('.item-card')?.id;
    console.log(id);
    if (id) {
     await this.cardService.setPlusCount(id);
      this.quantityChanged.emit();
    }
  }
 async countMinuse(event: Event) {
    if (this.inputCount <= 1) {
      this.inputCount = 1;
      return;
    }
    this.inputCount -= 1;
    const target = event?.target as HTMLElement;
    const id = target.closest('.item-card')?.id;
    console.log(id);
    if (id) {
    await  this.cardService.setMinuseCount(id);
       this.quantityChanged.emit()
    }
  }
}
