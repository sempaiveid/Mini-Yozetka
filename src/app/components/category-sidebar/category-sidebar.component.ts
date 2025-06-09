import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-sidebar',
  imports: [CommonModule],
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

  onCategorySelect(category: any) {
    this.categoryChange.emit(category);
  }
}
