import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { LoginComponent } from './user/user-login/login-form/login.component';

const routes: Routes = [
  { path: 'storefront', component: StorefrontComponent },
  { path: '', redirectTo: '/storefront', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
