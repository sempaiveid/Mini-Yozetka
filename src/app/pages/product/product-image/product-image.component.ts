import { ShareReplayConfig } from './../../../../../node_modules/@angular-devkit/build-angular/node_modules/rxjs/dist/types/internal/operators/shareReplay.d';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  imports: [],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.css'
})
export class ProductImageComponent {
@Input()  srcImg: string = ""
}
