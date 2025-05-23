import { Injectable } from '@angular/core';

interface User {
  id: string;
  login: string;
  password: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogined = false;

  user: User = {
    id: crypto.randomUUID(),
    login: 'name',
    password: '123assd'
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

  getLoginStatus(){
    localStorage.getItem('isLogin');
  }
 
  constructor() {}
}
