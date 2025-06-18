import { Injectable } from '@angular/core';
import { Product } from './product.service';

interface User {
  id: string;
  login: string;
  password: string;
  added_product:Product[];
  user_name: string;
  profile_icon: string;
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
    user_name:'Admin',
    profile_icon:'https://cdn-icons-png.flaticon.com/512/17003/17003310.png'
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
    location.reload();
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
