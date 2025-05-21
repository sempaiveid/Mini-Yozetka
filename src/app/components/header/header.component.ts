import { Component } from '@angular/core';
import { HeaderInputComponent } from './header-input/header-input.component';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  imports: [ HeaderInputComponent,RouterModule,MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMenu = false;
  cartCount = 2; // временно, это заглушка, потом можно с корзиной связать
}
