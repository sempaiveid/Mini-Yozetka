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
    { name: 'Побутова техніка', icon: 'tools', key: 'device' },
    { name: 'Зоотовари', icon: 'food', key: 'food_pets' },
    { name: 'Одяг', icon: 'clothes', key: 'cloth' },
  ];

  onCategorySelect(category: any) {
    this.categoryChange.emit(category);
  }
}
