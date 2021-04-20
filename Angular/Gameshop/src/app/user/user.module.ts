import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './user-login/login-form/login.component';
import { RegisterService } from './register/register.service';
import { LoginService } from './user-login/login.service';
import { FormsModule } from '@angular/forms';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { ReversePipe } from './user-orders/reverse.pipe';
import { CreditCardPipe } from './credit-card.pipe';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserLogoutComponent,
    UserInfoComponent,
    UserOrdersComponent,
    ReversePipe,
    CreditCardPipe,
  ],
  imports: [CommonModule, FormsModule],
  providers: [RegisterService, LoginService, CreditCardPipe],
  exports: [RegisterComponent, LoginComponent],
})
export class UserModule {}
