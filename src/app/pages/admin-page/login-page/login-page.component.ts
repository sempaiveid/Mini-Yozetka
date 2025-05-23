import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [RouterOutlet],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  router = inject(Router);
  loginService = inject(LoginService);
  ngOnInit(){
    if(this.loginService.isLogined){
      this.router.navigate(["/admin/profile"]);
    }
  }
  login(){
    console.log("login");
    this.router.navigate(["/admin/profile"]);
    this.loginService.login();
  }

  constructor(){
    console.log(this.loginService.getLoginStatus());
    
  }
}
