import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { StorefrontComponent } from './storefront/storefront.component';

const routes: Routes = [
  {path:'main', component:MainpageComponent},
  {path:'', redirectTo:'/main', pathMatch: 'full'},
  {path:'register',component: RegisterComponent},
  {path:'storefront',component: StorefrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
