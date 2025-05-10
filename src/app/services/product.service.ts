import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    items = [
    {
      name: "Coffe",
      picture: "https://content2.rozetka.com.ua/goods/images/big/461208002.jpg",
      price: 24,
      category: "food",
    },
    {
      name: "Cola",
      picture: "https://content2.rozetka.com.ua/goods/images/big/292154526.jpg",
      price: 25,
      category: "car",
    },
    {
      name: `Монитор 27" Samsung Odyssey G50D (LS27DG502EIXCI) -- QHD 2K / IPS / 180Hz / 1 мс (GTG) / HDR10 / FreeSync Premium / G-Sync Compatible / Pivot / Black Equalizer`,
      picture: "https://content1.rozetka.com.ua/goods/images/big/440994724.jpg",
      price: 243,
      category: "food",
    },
  ];

  localUpdate(){
    localStorage.setItem("items", JSON.stringify(this.items));
  }
  
  // Cтартовые продукты


  get (){
    const arrayObj = localStorage.getItem("items");
    return arrayObj ? [...JSON.parse(arrayObj)] : [];
  }

  get_category(name_category:string){
    const array_category = this.get().filter((obj)=> obj.category === name_category);
    return array_category;
  }

  get_small_name(name:string){
    const name_arr = name.split(" ")
    if (name_arr.length > 10){
      return name_arr.slice(0, 5).join(" ") + "..."
    } 
    return name_arr.join();
  }

  set addProduct (product: any){
    if(typeof product === "object" && Object.values(product).every((v)=> v !== undefined && v !== null)){
      this.items.push(product);
      this.localUpdate();
    }
  }

  constructor() {
    this.localUpdate();
  }
}
