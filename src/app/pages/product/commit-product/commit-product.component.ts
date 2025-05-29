import { Component } from '@angular/core';

@Component({
  selector: 'app-commit-product',
  imports: [],
  templateUrl: './commit-product.component.html',
  styleUrl: './commit-product.component.css'
})
export class CommitProductComponent {

  onClick(){
    console.log("send")
  }
}
