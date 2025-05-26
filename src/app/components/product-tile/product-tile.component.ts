import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { TileComponent } from './tile/tile.component';

@Component({
  selector: 'app-product-tile',
  imports: [NgFor, RouterModule,TileComponent],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css',
  providers: [CartService, ProductService]
})
export class ProductTileComponent {
  productItems: ProductService = inject(ProductService)
  products = this.productItems.get()
  productSet: CartService = inject(CartService)
constructor(){
 
}

}
