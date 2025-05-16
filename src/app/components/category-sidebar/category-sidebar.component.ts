import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-sidebar',
  imports: [CommonModule],
  templateUrl: './category-sidebar.component.html',
  styleUrl: './category-sidebar.component.css'
})
export class CategorySidebarComponent {
  categories = [
    { name: 'Побутова техніка', icon: 'tools' },
    { name: 'Зоотовари', icon: 'food' },
    { name: 'Одяг', icon: 'clothes' },
  ];

  onCategorySelect(category: string) {
    console.log('Выбрана категория:', category);
  }
}
