import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-tile',
  imports: [NgFor],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css',
  providers:[CartService,ProductService]
})
export class ProductTileComponent {
  productItems: ProductService = inject(ProductService)
  productSet: CartService = inject(CartService)
  products = this.productItems.get()

}
