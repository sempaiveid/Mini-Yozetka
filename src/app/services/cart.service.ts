import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[] = [];
  data: any = [];
  http = inject(HttpClient);
  constructor() {
    this.newCout();
  }
  async newCout() {
    this.data = await firstValueFrom(
      this.http.get<any[]>('http://localhost:3000/getCart', {
        withCredentials: true,
      })
    );
    await this.getTotalPrice();
  }

  set productCart(product: any) {
    if (typeof product !== 'object' || product === null) {
      console.log(
        `Полученны некоректные данные. Сет ждёт Объект, а не ${typeof product}`
      );
      return;
    }
    const newProduct = { ...product, quantity: 1 };
    newProduct.total = newProduct.quantity * newProduct.price;
    this.http
      .post(
        'http://localhost:3000/addToCard',
        {
          product: newProduct,
        },
        { withCredentials: true }
      )
      .subscribe(async (data) => {
        console.log(data);
        await this.newCout();
      });
  }

  get productCart() {
    return [...this.cart];
  }

  resetCart() {
    this.http
      .delete('http://localhost:3000/clearCart', { withCredentials: true })
      .subscribe(async (data) => {
        console.log(data);
        await this.newCout();
      });
  }

  setQuantity(product: any, quantity: number) {
    const findProd = this.cart.find((item: any) => item.id === product.id);
    if (findProd) {
      console.log('count update');
      findProd.quantity = quantity;
      findProd.total = findProd.quantity * findProd.price;
    } else {
      console.log(`Товар ${product.name} не найден в корзине`);
    }
  }
  
  private totalPrice$ = new BehaviorSubject<number>(0);

  getTotalPriceObservable() {
    return this.totalPrice$.asObservable();
  }

  deleteItem(id: string) {
    console.log(id);
    this.http
      .delete('http://localhost:3000/deleteWithCart', {
        withCredentials: true,
        body: {
          id: id,
        },
      })
      .subscribe(async (data) => {
        await this.newCout();
        await this.getTotalPrice();
        console.log(data);
      });
  }

  async getTotalPrice() {
    const data = await firstValueFrom(
      this.http.get<any[]>('http://localhost:3000/getCart', {
        withCredentials: true,
      })
    );

    const total = data.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    this.totalPrice$.next(total);
  }

  getCountOfCart() {
    let count = this.data.reduce(
      (sum: number, item: any) => (sum += item.quantity),
      0
    );
    return count;
  }
}
