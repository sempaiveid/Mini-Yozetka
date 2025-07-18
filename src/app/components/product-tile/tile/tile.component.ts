import { Component, inject, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-tile',
  imports: [RouterLink, RouterModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css',
})
export class TileComponent {
  @Input() name = "";
  @Input() id = ""
ngOnChanges(changes:SimpleChanges){
changes['id'].currentValue
}
}
