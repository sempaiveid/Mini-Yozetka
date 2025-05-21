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
  countPlus(event: Event) {
    if (this.inputCount > 999) {
      this.inputCount = 999
      return
    }
    this.inputCount += 1
    this.inputQuantity(event, this.inputCount)
  }
  countMinuse(event: Event) {
    if (this.inputCount <= 1) {
      this.inputCount = 1
      return
      this.inputQuantity(event, this.inputCount)

    }
    this.inputCount -= 1
    this.inputQuantity(event, this.inputCount)

  }
  inputQuantity(event?: Event, quantity?: number) {
    if (quantity !== undefined) {
      this.inputCount = quantity
    } else {
      const inputEl = event?.target as HTMLInputElement
      this.inputCount = Number(inputEl.value)
      if (this.inputCount > 999) {
        this.inputCount = 999
        inputEl.value = String()
        return
      }
      if (this.inputCount <= 0) {
        this.inputCount = 1
        inputEl.value = String(1)
      }
    }

    console.log(this.inputCount)
    const target = event?.target as HTMLElement;
    const id = target.closest(".item-card")?.id
    let findObj = this.cardService.productCart
    findObj = findObj.filter((item: any) => item.id === id)
    this.cardService.setQuantity(findObj[0], this.inputCount)


  }
}
