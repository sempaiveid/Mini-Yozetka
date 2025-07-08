import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  login: string;
  password: string;
  added_product: Product[];
  user_name: string;
  profile_icon: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.userSubject.next(JSON.parse(savedUser));
    }
  }

  get users_products(): Product[] {
    return this.getUser()?.added_product || [];
  }

  getUser(): User | null {
    return this.userSubject.value;
  }

  setUser(user: User) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
