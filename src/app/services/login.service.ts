import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.userSubject.next(JSON.parse(savedUser));
    }
  }

  get users_products(): Product[] {
    return this.getUser()?.added_product || [];
  }

  addUserProducts(products: Product[]) {
    const user = this.getUser();
    if (user) {
      user.added_product.push(...products);
      this.setUser(user);
    }
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
    this.router.navigate(['/login'])
  }
}
