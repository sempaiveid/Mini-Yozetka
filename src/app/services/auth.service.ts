import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService, User } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  constructor(private loginService: LoginService) {}

  async register(login: string, password: string, user_name: string, profile_icon: string = ''): Promise<boolean> {
    try {
      const response: any = await this.http.post(
        `${this.apiUrl}/register`,
        { login, password, user_name, profile_icon },
        { withCredentials: true }
      ).toPromise();
      this.loginService.setUser(response.user);
      return true;
    } catch (error) {
      return false;
    }
  }

  async login(login: string, password: string): Promise<boolean> {
    try {
      const response: any = await this.http.post(
        `${this.apiUrl}/login`,
        { login, password },
        { withCredentials: true }
      ).toPromise();
      this.loginService.setUser(response.user);
      return true;
    } catch (error) {
      return false;
    }
  }

  async me(): Promise<boolean> {
    try {
      const response: any = await this.http.get(`${this.apiUrl}/me`, { withCredentials: true }).toPromise();
      this.loginService.setUser(response.user);
      return true;
    } catch (error) {
      return false;
    }
  }

  async logout(): Promise<void> {
    await this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).toPromise();
    this.loginService.logOut();
  }
}
