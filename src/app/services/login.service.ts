import { Injectable } from '@angular/core';
import { Product } from './product.service';

interface User {
  id: string;
  login: string;
  password: string;
  added_product:Product[];
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogined: boolean = false;

  user: User = {
    id: crypto.randomUUID(),
    login: 'admin',
    password: 'admin',
    added_product: [],
  }

  users_products = this.user.added_product;

  add_user_product(products:Product[]){
    this.users_products.push(...products);
    this.update_user();
  }

  update_user(){
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  login(){
    this.isLogined = true;
    localStorage.setItem('isLogin', JSON.stringify(this.isLogined));
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  
  logOut(){
    this.isLogined = false;
    localStorage.removeItem('isLogin');
  }

  updateLoginStatus(){
    this.isLogined = JSON.parse(localStorage.getItem('isLogin') || 'false');
  }

  getLoginStatus() : boolean {
    return JSON.parse(localStorage.getItem('isLogin') || 'false');
  }
 
  constructor() {
    this.updateLoginStatus();
  }
}
