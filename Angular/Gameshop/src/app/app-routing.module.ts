import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './item-page/item-page.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { LoginComponent } from './user-login/login-form/login.component';

const routes: Routes = [
  { path: 'main', component: MainpageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'storefront', component: StorefrontComponent },
  { path: 'login', component: LoginComponent },
  { path: 'itempage', component: ItemPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
