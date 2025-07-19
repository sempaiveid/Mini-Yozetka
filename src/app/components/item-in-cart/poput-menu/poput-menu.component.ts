import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { Event } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-poput-menu',
  imports: [NgIf],
  templateUrl: './poput-menu.component.html',
  styleUrl: './poput-menu.component.css',
})
export class PoputMenuComponent {
  dataService = inject(CartService);
  toggle = false;

  constructor(private eRef: ElementRef) {}

  toggleItem(event: MouseEvent) {
    event.stopPropagation();
    this.toggle = !this.toggle;
  }

  async deleteItem(event: MouseEvent) {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const itemCard = target.closest('.item-card');
    const id = String(itemCard?.id);
    this.dataService.deleteItem(id);
    await this.dataService.getTotalPrice(); // 👉 обновляем сумму
    itemCard?.remove();
    this.toggle = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.toggle && !this.eRef.nativeElement.contains(event.target)) {
      this.toggle = false;
    }
  }
}
