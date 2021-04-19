import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './user-login/login-form/login.component';
import { RegisterService } from './register/register.service';
import { LoginService } from './user-login/login.service';
import { FormsModule } from '@angular/forms';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserInfoComponent } from './user-info/user-info.component';
 


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserLogoutComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    RegisterService,
    LoginService
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class UserModule { }
