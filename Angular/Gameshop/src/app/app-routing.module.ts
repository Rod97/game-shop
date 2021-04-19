import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './item-page/item-page.component';
import { RegisterComponent } from './user/register/register.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { LoginComponent } from './user/user-login/login-form/login.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'storefront', component: StorefrontComponent },
  { path: '', redirectTo: '/storefront', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'itempage', component: ItemPageComponent },
  { path: 'info', component: UserInfoComponent },
  { path: 'logout', component: UserLogoutComponent },
  { path: 'orders', component: UserOrdersComponent },
  { path: 'info', component: UserInfoComponent, canActivate: [AuthGuard] },
  { path: 'game/:id', component: ItemPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
