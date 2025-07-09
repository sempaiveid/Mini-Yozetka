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
import { AboutComponent } from './pages/footer/about/about.component';
import { TermsComponent } from './pages/footer/terms/terms.component';
import { ContactsComponent } from './pages/footer/contacts/contacts.component';
import { DeliveryComponent } from './pages/footer/delivery/delivery.component';
import { WarrantyComponent } from './pages/footer/warranty/warranty.component';
import { ReturnsComponent } from './pages/footer/returns/returns.component';
import { BonusComponent } from './pages/footer/bonus/bonus.component';
import { GiftCardsComponent } from './pages/footer/gift-cards/gift-cards.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Інтеренет-магазин Mini-Yozetka™"
    },
    {
        path: "cart",
        component: CartPageComponent,
        title: "Корзина"
    },
    {
        path: "admin",
        component: AdminPageComponent,
        title: "Панель Адміністратора ",
        canActivate: [authGuard],
        children: [
            {
                path: "", redirectTo: "profile", pathMatch: 'full',
            },
            { path: "profile", component: ProfileComponent, title: "Profile" }
        ]
    },
    {
        path: "login",
        component: LoginPageComponent,
        title: "Логін"
    },
    {
        path: "product/:id",
        component: ProductComponent,
        title: "Product"
    },
    {
        path: "search",
        component: SearchReasultComponent,
        title: "Пошук"
    },
    {
        path: "category/:id",
        component: HomeComponent,
        title: "Категорія"
    },
    {
        path: 'about',
        title: 'Про компанію | Mini-Yozetka',
        component: AboutComponent,
    },
    {
        path: 'terms',
        title: 'Умови використання',
        component: TermsComponent,
    },
    {
        path: 'contacts',
        title: 'Контакти',
        component: ContactsComponent,
    },
    {
        path: 'delivery',
        title: 'Доставка',
        component: DeliveryComponent,
    },
    {
        path: 'warranty',
        title: 'Гарантія',
        component: WarrantyComponent,
    },
    {
        path: 'returns',
        title: 'Повернення товару',
        component: ReturnsComponent,
    },
    {
        path: 'bonus',
        title: 'Бонусний рахунок',
        component: BonusComponent,
    },
    {
        path: 'gift-cards',
        title: 'Подарункові сертифікати',
        component: GiftCardsComponent,
    },
    {
        path: '**',
        component: NotFoundPageComponent,
        title: 'Сторінку не знайдено '
    },
];