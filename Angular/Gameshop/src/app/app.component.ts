import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/User';
import { LoginService } from './user/user-login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //isLoggedIn:boolean = (localStorage.getItem("isLoggedIn") == "true");
  isLoggedIn:boolean = false;
  title = 'Gameshop';

  constructor(private loginService: LoginService, private router:Router){}
  ngAfterViewChecked(){
    this.isLoggedIn = (localStorage.getItem('isLoggedIn') == 'true');
  }
}
