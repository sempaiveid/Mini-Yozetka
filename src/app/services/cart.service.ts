import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any = [];
  updateCart(){
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
  
  set productCart (product: any){
    if (typeof product === 'object'){
      const productToCart = {...product};
      if(!productToCart.quantity){
        productToCart.quantity = 1;
        this.cart.push(productToCart);
        this.updateCart();
      } else{
      //  this.productCart.some(item =>{ if(item.name === productToCart.name){
      //   productToCart.quantity + 1;
      //   return true;
      //  } else{
      //   return false;
      //   })
      }
    } else{
      console.log(`Полученны некоректные данные. Сет ждёт Объект, а не ${product}`); 
    }
  }

  get productCart(){
    const cart: any = localStorage.getItem("cart");
    return JSON.parse(cart);
  }

  constructor() {
    this.updateCart()
  }


}