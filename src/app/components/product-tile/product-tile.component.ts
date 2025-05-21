import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-tile',
  imports: [NgFor],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css'
})
export class ProductTileComponent {
  productItems: ProductService = inject(ProductService)
  products = this.productItems.get()

}
