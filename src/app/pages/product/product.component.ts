import { Component, inject, Input } from '@angular/core';
import { CommitProductComponent } from './commit-product/commit-product.component';
import { ProductService } from '../../services/product.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';
import { HeaderCatergoryComponent } from './header-catergory/header-catergory.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { TilePriceComponent } from './tile-price/tile-price.component';
import { ProductTileDataComponent } from './product-tile-data/product-tile-data.component';
import { DescriptionProductComponent } from './description-product/description-product.component';


@Component({
  selector: 'app-product',
  imports: [CommitProductComponent, NgIf,HeaderCatergoryComponent, ProductImageComponent, TilePriceComponent,ProductTileDataComponent,DescriptionProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})

export class ProductComponent {
  productItems = inject(ProductService);
  activeRoute = inject(ActivatedRoute);
  router = inject(Router)
  products = this.productItems.get()

  item:
    | {
      id: string;
      name: string;
      picture: string;
      price: number;
      category: string;
      description :{tile:string,text:string,bold:boolean};
    }
    | undefined;

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.item = this.productItems.get().find(item => item.id === id);
  
    if (!this.item) {
      this.router.navigate(['/404']);
    }
    document.body.style.backgroundColor="#f5f5f5"
    //console.log(this.item?.description.text)
   // localStorage.clear()
  }

}
