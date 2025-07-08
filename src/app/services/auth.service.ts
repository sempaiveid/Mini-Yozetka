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

  private async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }


  async register(
    login: string,
    password: string,
    user_name: string,
    profile_icon: string = 'https://cdn-icons-png.flaticon.com/512/17003/17003310.png',
  ): Promise<boolean> {
    const users = this.getAllUsers();
    const loginNormalized = login.trim().toLowerCase();

    const exists = users.find(user => user.login === loginNormalized);
    if(exists){
      return false;
    }

    const hashedPassword = await this.hashPassword(password);

    const newUser: User = {
      id: crypto.randomUUID(),
      login: loginNormalized,
      password: hashedPassword,
      added_product: [],
      user_name,
      profile_icon
    }
    users.push(newUser);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    this.loginService.setUser(newUser);
    return true;
  }

  async login(login: string, password: string): Promise<boolean>{
    const users = this.getAllUsers();
    const loginNormalized = login.trim().toLowerCase();
    const hashedPassword = await this.hashPassword(password);

    const foundUser = users.find((user)=>{return user.login === loginNormalized && user.password === hashedPassword});
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
