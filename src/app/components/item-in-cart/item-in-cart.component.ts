import { Component, inject } from '@angular/core';
import { PoputMenuComponent } from './poput-menu/poput-menu.component';
import { CounterProductComponent } from './counter-product/counter-product.component';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-in-cart',
  imports: [PoputMenuComponent, CounterProductComponent,NgFor,RouterModule],
  templateUrl: './item-in-cart.component.html',
  styleUrl: './item-in-cart.component.css'
})
export class ItemInCartComponent {
  product: ProductService = inject(ProductService)
  productCard = this.product.get()
}
