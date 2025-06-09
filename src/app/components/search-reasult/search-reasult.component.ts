import { Component, inject, Inject } from '@angular/core';
import { TileComponent } from '../product-tile/tile/tile.component';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-search-reasult',
  imports: [TileComponent,NgFor,NgIf],
  templateUrl: './search-reasult.component.html',
  styleUrl: './search-reasult.component.css'
})
export class SearchReasultComponent {

  product =  inject(ProductService)
  products = this.product.get()
}
