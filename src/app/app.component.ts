import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartService } from './services/cart.service';
import { FooterComponent } from './components/footer/footer.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { NgIf } from '@angular/common';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoadScreenComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isActive = true;

  productService = inject(ProductService);

  private async initProducts() {
    // await this.productService.loadFirstItems();
  }

  ngOnInit() {
    this.initProducts();
    setTimeout(() => {
      this.isActive = false;
    }, 1600);
  }
}
