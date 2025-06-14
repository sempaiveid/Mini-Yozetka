import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './category-sidebar.component.html',
  styleUrl: './category-sidebar.component.css'
})
export class CategorySidebarComponent {
  @Output() categoryChange = new EventEmitter<{ name: string; key: string }>();
  categories = [
    { name: 'Техніка та інструменти', icon: 'tools', key: 'device' },
    { name: 'Одяг, взуття та прикрасси', icon: 'clothes', key: 'cloth' },
    { name: 'Їжа та напої', icon: 'eat', key: 'eat' },
    { name: 'Зоотовари', icon: 'food', key: 'food_pets' },
    { name: 'Побутова Хімія', icon: 'chemicals', key: 'chemic' },
  ];

  constructor(private router: Router) {}

  onCategorySelect(category: any) {
    this.router.navigate(['/category', category.key]);
  }
}
