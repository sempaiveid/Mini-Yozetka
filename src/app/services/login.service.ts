import { Injectable } from '@angular/core';

interface User {
  login: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogined = false;

  user: User = {
    login: 'name',
    id: crypto.randomUUID()
  }

  login(){
    this.isLogined = true;
    localStorage.setItem('isLogin', JSON.stringify(this.isLogined));
    localStorage.setItem('user', JSON.stringify(this.user))
  }
  
  logOut(){
    this.isLogined = false;
    localStorage.removeItem('isLogin')
  }
 
  constructor() {}
}
