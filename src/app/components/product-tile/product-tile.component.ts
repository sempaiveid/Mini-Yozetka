import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { TileComponent } from './tile/tile.component';
import { CurrencyPipe } from '../../pipes/currency-convert.pipe';

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
  productItems: ProductService = inject(ProductService);
  productSet: CartService = inject(CartService);
  products = this.productItems.fiveProduct(0, this.count);
  productArr = this.productSet.getCountOfCart();


  btnRight(btnR: HTMLButtonElement) {
    if (!this.canGoRight) return
    this.count += 5;
    this.products = this.productItems.fiveProduct(this.count - 5, this.count);
  }

  btnLeft(btnL: HTMLButtonElement) {
    if (!this.canGoLeft) return;
    this.count -= 5;
    this.products = this.productItems.fiveProduct(this.count - 5, this.count);
  }

  get canGoLeft(): boolean {
    return this.count > 5;
  }

  get canGoRight(): boolean {
    return this.count < this.productItems.items.length;
  }

  ngOnChanges(): void {
    this.initProducts();
  }
  addToCart(product: any) {
    let isCart: any = this.productSet.productCart.some((el: any) => el.id === product.id)
    if (!isCart) {
      this.productSet.productCart = product;
    }
    else {
      this.productSet.deleteItem(product.id)
    }
  }
  isItemInCart(item: any): boolean {
    return this.productSet.productCart.some((el: any) => el.id === item.id)
  }

  private async initProducts() {
    await this.productItems.loadFirstItems();
    const filtered = this.category
      ? this.productItems.items.filter(p => p.category === this.category)
      : this.productItems.items;

      this.products = this.category
      ? filtered
      : filtered.slice(this.count - 5, this.count);
  }
}