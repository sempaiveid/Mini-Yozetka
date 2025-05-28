import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartService } from './services/cart.service';
import { FooterComponent } from './components/footer/footer.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoadScreenComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isActive = true
  ngOnInit() {
    setTimeout(() => {
      this.isActive = false
    }, 3000)
  }

}
