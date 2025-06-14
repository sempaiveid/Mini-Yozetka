import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.selectedCategory = id;
      this.selectedCategoryName = this.resolveCategoryName(id);
    });
  }

  resolveCategoryName(key: string | null): string | null {
    const map: Record<string, string> = {
      device: 'Техніка та інструменти',
      cloth: 'Одяг, взуття та прикрасси',
      eat: 'Їжа та напої',
      food_pets: 'Зоотовари',
      chemic: 'Побутова Хімія'
    };
    return key ? map[key] ?? null : null;
  }
}
