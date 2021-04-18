import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Constructor, injects service
  constructor(private loginService: LoginService, private router: Router) { }

  @Output() loggedIn = new EventEmitter();
  //Placeholder values for form
  currentUser: User;
  username = '';
  password = '';

  ngOnInit(): void { }

  //Method, attempts login
  loginUser() {
    this.loginService
      .loginUser(this.username, this.password)
      .subscribe((data) => {
        this.currentUser = data;
        if (this.currentUser != null) {
          localStorage.setItem('isLoggedIn', 'true');
          alert("Login successful");
          this.router.navigate(['/']);
        } else {
          alert("Login failed. Try again.");
        }
      });
  }
}
