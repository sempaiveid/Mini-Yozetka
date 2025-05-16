import { Component } from '@angular/core';
import { HeaderInputComponent } from './header-input/header-input.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ HeaderInputComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
