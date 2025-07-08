import { Injectable } from '@angular/core';
import {LoginService,  User} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = "users";

  private getAllUsers(): User[]{
    const raw = localStorage.getItem(this.usersKey);
    return raw ? JSON.parse(raw) : [];
  }

  register(
    login: string,
    password: string,
    user_name: string,
    profile_icon: string = 'https://cdn-icons-png.flaticon.com/512/17003/17003310.png',
  ): boolean {
    const users = this.getAllUsers();

    const exists = users.find((user)=> user.login === login);
    if(exists){
      return false;
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      login,
      password,
      added_product: [],
      user_name,
      profile_icon
    }
    users.push(newUser);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    this.loginService.setUser(newUser);
    return true;
  }

  login(login: string, password: string): boolean{
    const users = this.getAllUsers();

    const foundUser = users.find((user)=>{user.login === login && user.password === password});

    if(!foundUser) return false;
    this.loginService.setUser(foundUser);
    return true;
  }

  constructor(private loginService: LoginService) {
    const userJson = localStorage.getItem(this.usersKey);
    if(!userJson){
      localStorage.setItem(this.usersKey, JSON.stringify([]));
    }
  }
}
