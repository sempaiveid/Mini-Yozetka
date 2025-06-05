import { Component, inject, Input } from '@angular/core';
import { CommitProductComponent } from './commit-product/commit-product.component';
import { ProductService } from '../../services/product.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderCatergoryComponent } from './header-catergory/header-catergory.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { TilePriceComponent } from './tile-price/tile-price.component';
import { ProductTileDataComponent } from './product-tile-data/product-tile-data.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-product',
  imports: [CommitProductComponent, NgIf, HeaderCatergoryComponent, ProductImageComponent, TilePriceComponent, ProductTileDataComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})

export class ProductComponent {
  productItems = inject(ProductService);
  activeRoute = inject(ActivatedRoute);
  router = inject(Router)
  products = this.productItems.get()
  titleService = inject(Title);

  item:
    | {
      id: string;
      name: string;
      picture: string;
      price: number;
      category: string;
      discribe: string;
    }
    | undefined;

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.item = this.productItems.get().find(item => item.id === id);

    if (!this.item) {
      this.router.navigate(['/404']);
    }
    else {
      this.titleService.setTitle(this.item.name)
    }

  }

}
