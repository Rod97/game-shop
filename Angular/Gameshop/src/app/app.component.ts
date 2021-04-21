import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './user/user-login/login.service';
import { FormsModule } from '@angular/forms';
import { StorefrontService } from './storefront/storefront.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //isLoggedIn:boolean = (localStorage.getItem("isLoggedIn") == "true");
  isLoggedIn: boolean = false;
  title = 'Gameshop';
  searchString: string = '';
  constructor(
    private loginService: LoginService,
    private router: Router,
    private sService: StorefrontService
  ) {}
  ngAfterViewChecked() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') == 'true';
  }
  ngOnDestroy() {
    localStorage.clear();
  }

  search(str: string): void {
    this.searchString = str;
    this.sService.searchGames(str);
  }
}
