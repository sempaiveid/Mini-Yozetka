import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component'; // Убедитесь, что путь к компоненту правильный
import { LoginPageComponent } from './pages/login-page/login-page.component'; // Убедитесь, что путь к компоненту правильный
import { ProfileComponent } from './pages/profile/profile.component'; // Убедитесь, что путь к компоненту правильный
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';

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