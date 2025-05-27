import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [RouterOutlet],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  router = inject(Router);
  loginService = inject(LoginService);

  // login_input = new FormControl('login');
  // password_input = new FormControl('password');
  
  ngOnInit(){
    if(this.loginService.isLogined){
      this.router.navigate(["/admin/profile"]);
    }
  }


  login(){
    console.log("login");
    this.loginService.login();
    this.router.navigate(["/admin/profile"]);
  }

  constructor(){
    console.log(this.loginService.getLoginStatus());
    
  }
}
