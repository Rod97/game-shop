import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserInfoService } from './user-info.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  currentUser: User;
  buttons = "edit"
  constructor(private infoService: UserInfoService) { }

  ngOnInit(): void {

    this.getUserInfo(localStorage.getItem("token"));
  }

  getUserInfo(email: string) {
    this.infoService
      .getUserInfo(email)
      .subscribe((data) => {
        this.currentUser = data;
      });
  }

  editInfo() {

    //Turn info into input fields
    document.getElementById("email").innerHTML = `<input type='text' id=updatedEmail placeholder=${this.currentUser.email} >`
    document.getElementById("phoneNumber").innerHTML = `<input type='tel' id=updatedPhone placeholder=${this.currentUser.phoneNumber} >`
    document.getElementById("address").innerHTML = `<input type='text' id=updatedAddress placeholder=${this.currentUser.address} >`

    //change buttons
    this.buttons = "update"

  }

  confirmUpdate() {


    //Would work if we were not specifying to change emails.
    //Will be adding to this to allow CC number change and password changes.
    //Otherwise the only 2 fields being updated are phone# and Address, and that's boring.
    console.log(this.currentUser.email);
    let updatedUser: User = new User('', '', '', '', '', 0, '', new Date());
    let newEmail = (<HTMLInputElement>document.getElementById("updatedEmail")).value;
    let newNumber = (<HTMLInputElement>document.getElementById("updatedPhone")).value;
    let newAddress = (<HTMLInputElement>document.getElementById("updatedAddress")).value;
    updatedUser.email = ((newEmail) ? newEmail : this.currentUser.email);
    updatedUser.phoneNumber = ((newNumber) ? newNumber : this.currentUser.phoneNumber);
    updatedUser.address = ((newAddress) ? newAddress : this.currentUser.address);

    console.log(this.currentUser.email);
    this.infoService.updateInfo(this.currentUser.email, updatedUser).subscribe(data => {
      this.currentUser = data;
    });

    //remove input fields and repopulate table
    document.getElementById("email").innerHTML = `${this.currentUser.email}`
    document.getElementById("phoneNumber").innerHTML = `${this.currentUser.phoneNumber}`
    document.getElementById("address").innerHTML = `${this.currentUser.address}`
    this.buttons = "edit"
  }

  discardChanges() {
    document.getElementById("email").innerHTML = `${this.currentUser.email}`
    document.getElementById("phoneNumber").innerHTML = `${this.currentUser.phoneNumber}`
    document.getElementById("address").innerHTML = `${this.currentUser.address}`
    this.buttons = "edit"
  }

}
