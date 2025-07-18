import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  picture: string;
  price: number;
  description: object;
  category: string;
  uploader: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  items: Product[] = [];


  async get() {
    return await firstValueFrom(
      this.http.get<any[]>('http://localhost:3000/home', {
        withCredentials: true,
      })
    );
  }

  async find_uploader(user_name: string) {
    const user_products = await this.get();
    return user_products.filter((obj: any) => obj.uploader === user_name);
  }

  async get_category(name_category: string) {
    const array_category = await this.get();
    return array_category.filter((obj: any) => obj.category === name_category);
  }

  get_small_name(name: string) {
    const name_arr = name.split(' ');
    if (name_arr.length > 10) {
      return name_arr.slice(0, 5).join(' ') + '...';
    }
    return name_arr.join(' ');
  }

  set addProduct(product: Product) {
    if (
      typeof product === 'object' &&
      Object.values(product).every((v) => v !== undefined && v !== null)
    ) {
      const existingItems = localStorage.getItem('items');
      this.items = existingItems ? JSON.parse(existingItems) : [];

      product.id = crypto.randomUUID();
      this.http
        .post('http://localhost:3000/addProduct', {
          product: product,
        })
        .subscribe((data) => console.log(data));
    }
  }

  fiveProduct(num1: number, num2: number): any {
    const arr: any = this.items.slice(num1, num2);
    return arr;
  }

  // async loadFirstItems(){
  //   try{
  //     const localData = localStorage.getItem('items');
  //     this.items = localData ? JSON.parse(localData):[];
  //     if(this.items.length === 0){

  //       await new Promise<void>((resolve, reject)=>{
  //         this.http.get<Product[]>('/data/default-products.json').subscribe({
  //           next: (data)=>{
  //             this.items = data.map(product => ({...product, id: crypto.randomUUID()}));
  //             this.localUpdate();
  //             resolve();
  //           },
  //           error: (err)=>{
  //             console.error(`Ошибка загрузки данных из JSON: ${err.message}, ${err.status}, ${err.error}`);
  //             reject(err);
  //           }
  //       });
  //     });
  //     }
  //   } catch(e){
  //     console.error(`JSON не обработан, ошибка: ${e}`);
  //     this.items = [];
  //   }
  // }

  async deleteProduct(id: string, user: any) {
   return await firstValueFrom(
      this.http.patch(
        `http://localhost:3000/deleteAdmin`,
        {
          id: id,
          login: user,
        },
        { withCredentials: true }
      )
    );
  }

  constructor(private http: HttpClient) {}
}
