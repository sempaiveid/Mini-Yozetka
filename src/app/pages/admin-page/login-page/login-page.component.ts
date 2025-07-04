import { Router} from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  router = inject(Router);
  loginService = inject(LoginService);
  loginForm = new FormBuilder().group({
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  // login_input = new FormControl('login');
  
  ngOnInit(){
    if(this.loginService.isLogined){
      this.router.navigate(["/admin/profile"]);
    }
  }


  login(){
    const password = this.loginForm.get('password')?.value;

    if(password === this.loginService.user.password){
      this.loginService.login();
      this.router.navigate(["/admin/profile"]);
    }else{
      alert("Невірний пароль");
    }
    
  }

  closeForm(){
    this.router.navigate(["/"]);
    this.loginForm.reset();
  }

  constructor(){
    console.log(this.loginService.getLoginStatus());
  }
}
