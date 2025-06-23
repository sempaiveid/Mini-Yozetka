import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule,RouterModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css'
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Input() cartCount = 0;

  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit(); // сообщение родителю, что нужно закрыть меню
  }
  showCategories = false;

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }
}