import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  imports: [RouterOutlet],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  router = inject(Router);
  logined:boolean = false;
  constructor(){
    if (!this.logined) {
      this.router.navigate(["login"])
    } else{
      this.router.navigate(["profile"])
    }
  }
}
