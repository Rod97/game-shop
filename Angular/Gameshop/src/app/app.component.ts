import { Component } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn:boolean = false;
  title = 'Gameshop';

  ngAfterViewChecked(){
    this.isLoggedIn = (localStorage.getItem('isLoggedIn') == 'true');
  }


}
