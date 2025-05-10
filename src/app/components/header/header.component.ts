import { Component } from '@angular/core';
import { HeaderInputComponent } from './header-input/header-input.component';

@Component({
  selector: 'app-header',
  imports: [ HeaderInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
