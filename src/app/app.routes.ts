import { LoginPageComponent } from './pages/admin-page/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component'; 
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/admin-page/profile/profile.component';
import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { authGuard } from './guards/auth.guard';
import { SearchReasultComponent } from './components/search-reasult/search-reasult.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Інтеренет-магазин Mini-Yozetka™"
    },
    {
        path: "cart",
        component: CartPageComponent,
        title: "Інтеренет-магазин Mini-Yozetka™/Cart"
    },
    {
        path: "admin",
        component: AdminPageComponent,
        title: "Admin",
        canActivate:[authGuard],
        children: [
            {
                path: "", redirectTo:"profile", pathMatch:'full',
            },
            {path:"profile", component:ProfileComponent, title: "Profile"}
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
    },
    {
        path: "search",
        component:  SearchReasultComponent,
        title: "Product"
    },
    {
        path: "category/:id",
        component: HomeComponent,
        title: "Category"
    },
    {
        path: '**',
        component: NotFoundPageComponent,
        title: 'Page not found'
    },
];