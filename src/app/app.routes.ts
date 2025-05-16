import { Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "cart",
        component: CartPageComponent
    }
];
