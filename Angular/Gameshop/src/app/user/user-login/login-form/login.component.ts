import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() loggedIn = new EventEmitter();
  //Placeholder values for form
  currentUser: User;
  username = '';
  password = '';

  ngOnInit(): void {}

  //Method, attempts login
  loginUser() {
    this.loginService
      .loginUser(this.username, this.password)
      .subscribe((data) => {
        this.currentUser = data;
        this.loggedIn.emit(this.currentUser);
        console.log(`${data} emitted`);
      });
  }
}
