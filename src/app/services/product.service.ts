import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Product {
  id: string;
  name: string;
  picture: string;
  price: number;
  description: string;
  category: string;
  uploader: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  items :Product[] = [];

  localUpdate() {
    localStorage.setItem("items", JSON.stringify(this.items));
  }


  get() {
    const arrayObj = localStorage.getItem("items");
    return arrayObj ? [...JSON.parse(arrayObj)] : [];
  }

  find_uploader(user_name:string){
    const user_products = this.get().filter((obj)=> obj.uploader === user_name);
    return user_products;
  }

  get_category(name_category: string) {
    const array_category = this.get().filter((obj) => obj.category === name_category);
    return array_category;
  }

  get_small_name(name: string) {
    const name_arr = name.split(" ")
    if (name_arr.length > 10) {
      return name_arr.slice(0, 5).join(" ") + "..."
    }
    return name_arr.join(" ");
  }

  set addProduct(product: Product) {
    if (typeof product === "object" && Object.values(product).every((v) => v !== undefined && v !== null)) {
      const existingItems = localStorage.getItem("items");
      this.items = existingItems ? JSON.parse(existingItems) : [];

      product.id = crypto.randomUUID();
      this.items.push(product);
      this.localUpdate();
    }
  }

  fiveProduct(num1: number, num2: number): any {
    const arr:any = this.items.slice(num1, num2)
    return arr
  }

  async loadFirstItems(){
    try{
      const localData = localStorage.getItem('items');
      this.items = localData ? JSON.parse(localData):[];
      if(this.items.length === 0){

        await new Promise<void>((resolve, reject)=>{
          this.http.get<Product[]>('/data/default-products.json').subscribe({
            next: (data)=>{
              this.items = data.map(product => ({...product, id: crypto.randomUUID()}));
              this.localUpdate();
              resolve();
            },
            error: (err)=>{
              console.error(`Ошибка загрузки данных из JSON: ${err.message}, ${err.status}, ${err.error}`);
              reject(err);
            }
        });
      });
      }
    } catch(e){
      console.error(`JSON не обработан, ошибка: ${e}`);
      this.items = [];
    }
  }


  deleteProduct(id : string){
    this.items = this.items.filter(item => item.id !== id);
    this.localUpdate();
  }

  constructor(private http: HttpClient) {
    
  }
}