import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './user-login/login-form/login.component';
import { RegisterService } from './register/register.service';
import { LoginService } from './user-login/login.service';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    InfoComponent
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
