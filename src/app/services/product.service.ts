import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items = [
    {
      id: crypto.randomUUID(),
      name: `Бігова доріжка Xiaomi KingSmith Walkingpad&Treadmill R2 Black (6970492718674)`,
      picture: "https://content.rozetka.com.ua/goods/images/big/235053111.jpg",
      price: 28999,
      category: "device",
    },
    {
      id: crypto.randomUUID(),
      name: `Тачка будівельна Budmonster 1-колісна 85 л вантажопідйомність 200 кг колесо лите 4 х 8" (01-011/2)`,
      picture: "https://content2.rozetka.com.ua/goods/images/big/309965559.jpg",
      price: 2075,
      category: "device",
    },
    {
      id: crypto.randomUUID(),
      name: `Тумба підвісна RJ Atlas RJFU005-11GR сіра 60 см з умивальником Jenor RZJ610`,
      picture: "https://content2.rozetka.com.ua/goods/images/big/293164376.jpg",
      price: 7917,
      category: "device",
    },
    {
      id: crypto.randomUUID(),
      name: `Відеореєстратор Xiaomi 70mai Dash Cam A200 (1040052)`,
      picture: "https://content1.rozetka.com.ua/goods/images/big/429877097.jpg",
      price: 2999,
      category: "device",
    },
    {
      id: crypto.randomUUID(),
      name: `Сумка крос-боді через плече жіноча з натуральної шкіри маленька Michael Kors 30S3SIMM8L-001 Чорна (196163826585)`,
      picture: "https://content2.rozetka.com.ua/goods/images/big/443858403.jpg",
      price: 16200,
      category: "cloth",
    },
    {
      id: crypto.randomUUID(),
      name: `Калькулятор Brilliant (BS-8888PK)`,
      picture: "https://content.rozetka.com.ua/goods/images/big/246182272.jpg",
      price: 524,
      category: "device",
    },
    {
      id: crypto.randomUUID(),
      name: `Настільна гра Rozum Вибухові кошенята: Добро і зло (EKIEK12UA) (810083047133)`,
      picture: "https://content1.rozetka.com.ua/goods/images/big/456904280.jpg",
      price: 815,
      category: "food_pets",
    },
    {
      id: crypto.randomUUID(),
      name: `Холодильник EDLER ED-400IN`,
      picture: "https://content2.rozetka.com.ua/goods/images/big/534301454.jpg",
      price: 20773,
      category: "device",
    },
    {
      id: crypto.randomUUID(),
      name: `Рюкзак ABYstyle Diablo Lilith (3665361121282)`,
      picture: "https://content.rozetka.com.ua/goods/images/big/417092745.jpg",
      price: 1464,
      category: "cloth",
    },
    {
      id: crypto.randomUUID(),
      name: `Сухий корм для дорослих котів Purina Cat Chow Adult з качкою 1.5 кг (7613035394117)`,
      picture: "https://content1.rozetka.com.ua/goods/images/big/421075373.jpg",
      price: 224,
      category: "food_pets",
    },
    {
      id: crypto.randomUUID(),
      name: `Мобільний телефон Apple iPhone 16 Pro 256GB Black Titanium (MYNH3SX/A)`,
      picture: "https://content2.rozetka.com.ua/goods/images/big/468886490.jpg",
      price: 56699,
      category: "device",
    },
  ];

  localUpdate() {
    localStorage.setItem("items", JSON.stringify(this.items));
  }

  // Cтартовые продукты


  get() {
    const arrayObj = localStorage.getItem("items");
    return arrayObj ? [...JSON.parse(arrayObj)] : [];
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
    return name_arr.join();
  }

  set addProduct(product: any) {
    if (typeof product === "object" && Object.values(product).every((v) => v !== undefined && v !== null)) {
      product.id = crypto.randomUUID(),
        this.items.push(product);
      this.localUpdate();
    }
  }
  fiveProduct(num1: number, num2: number): any {
    console.log(this.items)
    const arr: any = this.items.slice(num1, num2)
    return arr
  }


  constructor() {
    this.localUpdate();
  }
}