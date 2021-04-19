import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { UserModule } from './user/user.module';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './storefront/cart/cart.component';

@NgModule({
  declarations: [AppComponent, StorefrontComponent, ItemPageComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, HttpClientModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
