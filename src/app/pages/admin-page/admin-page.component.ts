import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-admin-page',
  imports: [RouterOutlet],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  router = inject(Router);
  loginService = inject(LoginService)
  logined:boolean = this.loginService.getLoginStatus();

  ngOnInit(){
    if (!this.logined) {
      this.router.navigate(["login"])
    } else{
      this.router.navigate(["/admin/profile"])
    }
  }
  constructor(){
  }
}
