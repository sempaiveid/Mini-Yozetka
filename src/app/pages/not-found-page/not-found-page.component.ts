import { Component } from '@angular/core';
import { Error404Component } from '../error-404/error-404.component';

@Component({
  selector: 'app-not-found-page',
  imports: [Error404Component],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {

}
