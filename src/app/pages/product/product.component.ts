import { Component, inject, Input } from '@angular/core';
import { CommitProductComponent } from './commit-product/commit-product.component';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [CommitProductComponent, NgFor, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductService]
})
export class ProductComponent {
  productItems: ProductService = inject(ProductService)
  products = this.productItems.get()
  activeRoute = inject(ActivatedRoute)
  item: {
    id: string;
    name: string;
    picture: string;
    price: number;
    category: string;
  } | undefined ;

  ngOnInit() {
    // this.activeRoute.snapshot.params["id"]
    // const activeRouts = this.activeRoute.snapshot.params["id"]
    // // this.item = this.productItems.items.find(item => item.id === activeRouts)
    // this.item =this.productItems.items.find(item => item.id === activeRouts)
    // console.log(this.activeRoute.snapshot.params["id"])
    // console.log(this.item)
    // console.log(typeof activeRouts); // має бути "string"
    // console.log(this.productItems.items);
   
      const activeRouts = this.activeRoute.snapshot.params["id"];
      // this.item = this.productItems.get().find(item => item.id === activeRouts);
      // console.log(typeof(activeRouts));
      // console.log(this.item);
    
      // console.log('Route ID:', this.activeRoute.snapshot.params["id"]);
      // console.log('Products:', this.productItems.get()[0].id);

      // console.log("Route param id:", activeRouts);
      // console.log("All product ids:");
      // this.productItems.get().forEach(item => console.log(item.id));
      
  }
  // products = this.productItems.get()

}
