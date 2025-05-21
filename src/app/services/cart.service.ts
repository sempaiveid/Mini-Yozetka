import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = [];

  updateCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

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

    this.updateCart();
  }

  get productCart() {
    return [...this.cart];
  }

  resetCart() {
    this.cart = [];
    this.updateCart();
  }

  setQuantity(product: any, quantity: number) {
    const findProd = this.cart.find((item: any) => item.id === product.id);
    if (findProd) {
      console.log("count update")
      findProd.quantity = quantity;
      findProd.total = findProd.quantity * findProd.price;
      this.updateCart()
    } else {
      console.log(`Товар ${product.name} не найден в корзине`);
    }
  }

  deleteItem(id: string) {
    const item_to_remove: number = this.cart.findIndex((item: any) => item.id === id);
    this.cart.splice(item_to_remove, 1);
    this.updateCart();
  }

  getTotalPrice() {
    let total = 0;
    for (let product of this.cart) {
      total += product.price * product.quantity;
    }
    return total;
  }

  getCountOfCart() {
    return this.cart.reduce((sum: number, item: any) => sum + item.quantity, 0)
  }

  constructor() {
    const sortedCart = localStorage.getItem("cart");
    this.cart = sortedCart ? JSON.parse(sortedCart) : [];
  }


}