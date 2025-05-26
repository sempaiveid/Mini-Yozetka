import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-tile',
  imports: [RouterLink,RouterModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css',
    providers: [ ProductService]
})
export class TileComponent {
  productItems: ProductService = inject(ProductService)
  products = this.productItems.get()
  @Input() name = "";
  @Input() discribe = ""
  @Input() price = 0
  @Input() picture = ""
    @Input() id = ""
}
