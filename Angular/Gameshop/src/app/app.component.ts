import { Component } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser:User;
  title = 'Gameshop';

  setUser(user){
    this.currentUser= user;
    console.log(this.currentUser);
  }
}
