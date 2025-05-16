import { ProfileComponent } from './pages/admin-page/profile/profile.component';
import { LoginPageComponent } from './pages/admin-page/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:"admin",
        component: AdminPageComponent,
        title:"Admin",
        children:[
            {   
                path: "login",
                component: LoginPageComponent,
                title: "Login"
            },
            {
                path: "profile",
                component: ProfileComponent,
                title: "Profile"
            }
        ]
    }
];
