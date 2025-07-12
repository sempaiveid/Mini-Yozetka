import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];


  set productCart(product: any) {
    if (typeof product !== 'object' || product === null) {
      console.log(`Полученны некоректные данные. Сет ждёт Объект, а не ${typeof product}`);
      return;
    }

    const existingProduct = this.cart.find((item: any) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.total = existingProduct.quantity * existingProduct.price;
    } else {
      const newProduct = { ...product, quantity: 1 };
      newProduct.total = newProduct.quantity * newProduct.price;
      this.cart.push(newProduct);
    }

  }

  get productCart() {
    return [...this.cart];
  }

  resetCart() {
    this.cart = [];
  }

  setQuantity(product: any, quantity: number) {
    const findProd = this.cart.find((item: any) => item.id === product.id);
    if (findProd) {
      console.log("count update")
      findProd.quantity = quantity;
      findProd.total = findProd.quantity * findProd.price
    } else {
      console.log(`Товар ${product.name} не найден в корзине`);
    }
  }

  deleteItem(id: string) {

    console.log(this.cart)
    const item_to_remove: number = this.cart.findIndex((item: any) => item.id === id);
    console.log(item_to_remove)
    this.cart.splice(item_to_remove, 1);
  }

  getTotalPrice() {
    let total = 0;
    for (let product of this.cart) {
      total += product.price * product.quantity;
    }
    return total;
  }

  getCountOfCart() {
    return this.cart.reduce((sum: number, item: any) => sum += item.quantity, 0)
  }



}