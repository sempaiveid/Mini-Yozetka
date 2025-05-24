import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css',
  providers: [CartService, ProductService]
})
export class ProductTileComponent {
  count = 5;
  productItems: ProductService = inject(ProductService);
  productSet: CartService = inject(CartService);
  products = this.productItems.fiveProduct(0, this.count);

  btnRight() {
    if (!this.canGoRight) return;
    this.count += 5;
    this.products = this.productItems.fiveProduct(this.count - 5, this.count);
  }

  btnLeft() {
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
}
