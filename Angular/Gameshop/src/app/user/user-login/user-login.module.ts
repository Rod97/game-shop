import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-form/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordRecoveryComponent } from './login-form/password-recovery/password-recovery.component';

@NgModule({
  declarations: [LoginComponent, PasswordRecoveryComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [LoginComponent],
})
export class UserLoginModule {}
