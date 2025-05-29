import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile-price',
  imports: [],
  templateUrl: './tile-price.component.html',
  styleUrl: './tile-price.component.css'
})
export class TilePriceComponent {
@Input() name:string = ""
@Input()price:number = 0
}
