import { Router} from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { AuthService } from '../../../services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  router = inject(Router);
  loginService = inject(LoginService);
  authService = inject(AuthService);
  loginForm = new FormBuilder().group({
    login:['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  registerForm = new FormBuilder().group({
    user_name: ['', [Validators.required,  Validators.minLength(4)]],
    login: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    repeat_password: ['', [Validators.required]]
  });


  mode = 'login';

  switchMode(mode: string){
    this.mode = mode;
  }
  
  ngOnInit(){
    if(this.loginService.getUser()){
      this.router.navigate(["/admin/profile"]);
    }
  }


  async login(){
    const login = this.loginForm.get('login')?.value || '';
    const password =  this.loginForm.get('password')?.value || '';

    const success = await this.authService.login(login, password);
    
    if (success) {
      this.router.navigate(["/admin/profile"]);
    } else {
      alert("Невірний логін або пароль");
    }
  }

  async register(){
    const login = this.registerForm.get('login')?.value || '';
    const password = this.registerForm.get('password')?.value || '';
    const repeat_password = this.registerForm.get('repeat_password')?.value || '';
    const user_name = this.registerForm.get('user_name')?.value || '';
    if (password !== repeat_password) {
      alert("Паролі не співпадають");
      return;
    }

    const success = this.authService.register(login, password, user_name);

    if(success){
      this.router.navigate(["/admin/profile"]);
      this.registerForm.reset();
    }else{
      alert("Користувач з таким логіном вже існує")
    }
  }

  closeForm(){
    this.router.navigate(["/"]);
    this.loginForm.reset();
  }

  constructor(){
    
  }
}
