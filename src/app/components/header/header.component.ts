import { Component, inject, } from '@angular/core';
import { HeaderInputComponent } from './header-input/header-input.component';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { CartService } from '../../services/cart.service';
import { PipeService } from '../../services/pipe.service';
import { ThemeCheckComponent } from './theme-check/theme-check.component';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [HeaderInputComponent, RouterModule, MobileMenuComponent,ThemeCheckComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  pipe_service = inject(PipeService)
  showMenu = false;
  cartService = inject(CartService);
  count: number = 0 
  http :HttpClient = inject(HttpClient)


  selectedCurrency = this.pipe_service.currency;

  changeCurrency(event:Event){
    const selectElement = event.target as HTMLSelectElement;
    this.pipe_service.set_currency(selectElement.value);
  }

}
