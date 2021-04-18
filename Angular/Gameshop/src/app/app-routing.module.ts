import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './item-page/item-page.component';
import { RegisterComponent } from './user/register/register.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { LoginComponent } from './user/user-login/login-form/login.component';
import { InfoComponent } from './user/info/info.component';

const routes: Routes = [
  { path: 'storefront', component: StorefrontComponent },
  { path: '', redirectTo: '/storefront', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'itempage', component: ItemPageComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
