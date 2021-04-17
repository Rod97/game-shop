import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { LoginComponent } from './user/user-login/login-form/login.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    StorefrontComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
