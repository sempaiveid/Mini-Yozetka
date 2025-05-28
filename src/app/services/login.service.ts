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
  isLogined: boolean = false;

  user: User = {
    id: crypto.randomUUID(),
    login: 'admin',
    password: 'admin'
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
