import { Component, inject, Inject } from '@angular/core';
import { TileComponent } from '../product-tile/tile/tile.component';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '../../pipes/currency-convert.pipe';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-reasult',
  imports: [TileComponent, NgFor, NgIf, RouterModule, CurrencyPipe],
  templateUrl: './search-reasult.component.html',
  styleUrl: './search-reasult.component.css'
})
export class SearchReasultComponent {

  product = inject(ProductService)
  products = this.product.get()
  newProduct: { name: string, picture: string, id: string, price: number }[] = []
  whatSearch = ""

  cart = inject(CartService)
  titleService = inject(Title);
  route = inject(ActivatedRoute)
  ngOnInit() {
    this.route.queryParams.subscribe(({ nameProduct }) => {
      this.whatSearch = nameProduct
      this.newProduct = this.products.filter(el =>
        el.name.toLowerCase().includes(nameProduct.toLowerCase())
      );
      this.titleService.setTitle(`Пошук : ${nameProduct}`)
    })
  }
  addToCart(product: any) {
    console.log("12345")
    let isCart: any = this.cart.productCart.some((el: any) => el.id === product.id)
    if (!isCart) {
      this.cart.productCart = product;
    }
    else {
      this.cart.deleteItem(product.id)
    }
  }
  isItemInCart(item: any): boolean {
    return this.cart.productCart.some((el: any) => el.id === item.id)
  }


}
