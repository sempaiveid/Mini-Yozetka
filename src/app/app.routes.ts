import { LoginPageComponent } from './pages/admin-page/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component'; 
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/admin-page/profile/profile.component';
import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "cart",
        component: CartPageComponent,
        title: "Cart"
    },
    {
        path: "admin",
        component: AdminPageComponent,
        title: "Admin",
        children: [
            {
                path: "profile",
                component: ProfileComponent,
                title: "Profile"
            }
        ]
    },
    {
        path: "login",
        component: LoginPageComponent,
        title: "Login"
    },
    {
        path: "product/:id",
        component:  ProductComponent,
        title: "Product"
    }
];