import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buy-menu',
  imports: [ReactiveFormsModule],
  templateUrl: './buy-menu.component.html',
  styleUrl: './buy-menu.component.css',
})
export class BuyMenuComponent {
  form: FormGroup = new FormGroup({
    tel: new FormControl("+380", Validators.pattern(/\d/)),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    surname: new FormControl('',Validators.required),
  });
  @Output() evenClose = new EventEmitter();
  close() {
    this.evenClose.emit();
  }
  product: CartService = inject(CartService);
  productCard: any[] = this.product.productCart;
  http: HttpClient = inject(HttpClient);
  isBuy = false;
  buy() {
    if (this.productCard.length !== 0) {
      this.http
        .post('http://localhost:3000/send', {
          order: this.productCard,
          phoneNumber: this.form.get('tel')?.value,
          firstName: this.form.get('firstName')?.value,
          lastName: this.form.get('lastName')?.value,
          surname: this.form.get('surname')?.value,
        })
        .subscribe((data) => {
          console.log(data);
        });
    }
    this.evenClose.emit()
    this.product.resetCart();
    this.productCard = [];
    this.isBuy = true;
    setTimeout(() => (this.isBuy = false), 1500);
  }
}
