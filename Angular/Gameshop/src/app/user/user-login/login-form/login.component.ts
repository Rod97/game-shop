import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Constructor, injects service
  constructor(private loginService: LoginService) {}

  //Placeholder values for form
  username = '';
  password = '';

  ngOnInit(): void {}

  //Method, attempts login
  loginUser() {
    this.loginService
      .loginUser(this.username, this.password)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
