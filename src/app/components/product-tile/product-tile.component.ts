import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { TileComponent } from './tile/tile.component';
import { CurrencyPipe } from '../../pipes/currency-convert.pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-tile',
  imports: [NgFor, RouterModule, TileComponent, NgIf, CurrencyPipe],
  standalone: true,
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css',
})
export class ProductTileComponent {
  @Input() category: string | null = null;
  @Input() categoryName: string | null = null;

  count = 5;
  productItems: any = [];
  productSet: CartService = inject(CartService);
  products: any = [];
  productArr = this.productSet.getCountOfCart();
  http = inject(HttpClient);
  loadCart() {
    this.http.get<any[]>('http://localhost:3000/home').subscribe((data) => {
      this.productItems = data;
      console.log(data);
      this.products = this.fiveProduct(0, this.count);
      this.initProducts();
    });
  }
  ngOnInit() {
    this.loadCart();
    if(this.category){
      this.initProducts();
    }
  }

  btnRight(btnR: HTMLButtonElement) {
    if (!this.canGoRight) return;
    this.count += 5;
    this.products = this.fiveProduct(this.count - 5, this.count);
  }

  btnLeft(btnL: HTMLButtonElement) {
    if (!this.canGoLeft) return;
    this.count -= 5;
    this.products = this.fiveProduct(this.count - 5, this.count);
  }

  get canGoLeft(): boolean {
    return this.count > 5;
  }

  get canGoRight(): boolean {
    return this.count < this.productItems.length;
  }

  ngOnChanges(): void {
    this.initProducts();
  }
  addToCart(product: any) {
    let isCart: any = this.productSet.productCart.some(
      (el: any) => el.id === product.id
    );
    if (!isCart) {
      this.productSet.productCart = product;
    } else {
      this.productSet.deleteItem(product.id);
    }
  }
  isItemInCart(item: any): boolean {
    return this.productSet.productCart.some((el: any) => el.id === item.id);
  }
  fiveProduct(num1: number, num2: number): any {
    const arr: any = this.productItems.slice(num1, num2);
    return arr;
  }

  private initProducts() {
    const filtered = this.category
      ? this.productItems.filter((p: any) => p.category === this.category)
      : this.productItems;
    this.products = this.category
      ? filtered
      : filtered.slice(this.count - 5, this.count);
  }
}
