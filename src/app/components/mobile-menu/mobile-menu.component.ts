import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule],
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
}
