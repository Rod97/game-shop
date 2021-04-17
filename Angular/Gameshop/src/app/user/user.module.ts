import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './user-login/login-form/login.component';
import { RegisterService } from './register/register.service';
import { LoginService } from './user-login/login.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
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
