import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserInfoService } from './user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  
  currentUser:User;
  constructor(private infoService:UserInfoService) { }

  ngOnInit(): void {
   
      this.getUserInfo(localStorage.getItem("token"));
    }
  
    getUserInfo(email:string) {
      this.infoService
        .getUserInfo(email)
        .subscribe((data) => {
          this.currentUser = data;
        });
    }

}
