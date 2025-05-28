import { Component } from '@angular/core';
import { ProductTileComponent } from '../../components/product-tile/product-tile.component';
import { AdsComponent } from '../../components/ads/ads.component';
import { CategorySidebarComponent } from '../../components/category-sidebar/category-sidebar.component';

@Component({
  selector: 'app-home',
  imports: [ProductTileComponent,AdsComponent,CategorySidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedCategory: string | null = null;
  selectedCategoryName: string | null = null;

  onCategoryChanged(category: any) {
    this.selectedCategory = category.key;
    this.selectedCategoryName = category.name;
  }
}
