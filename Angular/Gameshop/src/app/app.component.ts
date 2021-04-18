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
  isLoggedIn:boolean = (localStorage.getItem("isLoggedIn") == "true");
  title = 'Gameshop';

  constructor(private loginService: LoginService, private router:Router){}
  ngAfterViewChecked(){
    this.isLoggedIn = (localStorage.getItem('isLoggedIn') == 'true');
  }
  end(){
    console.log("inside end method");
    this.loginService.logoutUser();
    this.router.navigate(['/storefront']);
    console.log("end of end method");
  }
  
}
