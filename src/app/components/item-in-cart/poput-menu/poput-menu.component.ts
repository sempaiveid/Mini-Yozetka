import { Component, inject } from '@angular/core';
import { AdminFormComponent } from "../../admin-form/admin-form.component";
import { NgIf } from '@angular/common';
import { Event } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-poput-menu',
  imports: [AdminFormComponent, NgIf],
  templateUrl: './poput-menu.component.html',
  styleUrl: './poput-menu.component.css'
})
export class PoputMenuComponent {
  dataService = inject(CartService)
  
  toggle = false
  toggleItem() {
    this.toggle = !this.toggle
  }
  deleteItem(event: MouseEvent) {
    const target = event.target as HTMLElement
    const itemCard = target.closest('.item-card');
    const id = String(itemCard?.id)
    this.dataService.deleteItem(id)
    itemCard?.remove()

  }
}
