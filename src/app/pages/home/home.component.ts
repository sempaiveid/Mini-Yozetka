import { Component } from '@angular/core';
import { ProductTileComponent } from '../../components/product-tile/product-tile.component';

@Component({
  selector: 'app-home',
  imports: [ProductTileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
