import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  login: string;
  user_name: string;
  profile_icon: string;
  added_product: Product[];
}


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

   constructor(private router: Router){}


  get users_products(): Product[] {
    return this.getUser()?.added_product || [];
  }

  addUserProducts(products: Product[]) {
    console.log(products)
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
  }


  logOut() {
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

}
