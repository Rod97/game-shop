import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService
      .loginUser('rodrigo@email.com', '123456')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
