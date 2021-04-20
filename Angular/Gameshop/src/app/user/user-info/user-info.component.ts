import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserInfoService } from './user-info.service';
import { FormsModule } from '@angular/forms';
import { CreditCardPipe } from '../credit-card.pipe';
import { CartService } from 'src/app/storefront/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  currentUser: User;
  buttons = "edit"
  constructor(private infoService: UserInfoService, private ccPipe: CreditCardPipe, private cart: CartService, private router: Router) { }

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
    document.getElementById("cc").innerHTML = `<input type='number' id=updatedCc minlength=16 maxlength=16>`
    document.getElementById("password").innerHTML = `<input type='password' id=updatedPass placeholder='new password' >`
    document.getElementById("phoneNumber").innerHTML = `<input type='tel' id=updatedPhone placeholder='${this.currentUser.phoneNumber}' >`
    document.getElementById("address").innerHTML = `<input type='text' id=updatedAddress placeholder='${this.currentUser.address}' >`

    //change buttons
    this.buttons = "update"

  }

  confirmUpdate() {



    let updatedUser: User = new User();
    let newCc = (<HTMLInputElement>document.getElementById("updatedCc")).value;
    let newPassword = (<HTMLInputElement>document.getElementById("updatedPass")).value;
    let newNumber = (<HTMLInputElement>document.getElementById("updatedPhone")).value;
    let newAddress = (<HTMLInputElement>document.getElementById("updatedAddress")).value;

    if ((newCc.toString.length == 16) || (newCc.toString.length == 0)) {
      updatedUser.ccNumber = ((newCc) ? newCc : this.currentUser.ccNumber);
      updatedUser.password = ((newPassword) ? newPassword : this.currentUser.password);
      updatedUser.phoneNumber = ((newNumber) ? newNumber : this.currentUser.phoneNumber);
      updatedUser.address = ((newAddress) ? newAddress : this.currentUser.address);


      this.infoService.updateInfo(this.currentUser.email, updatedUser).subscribe(data => {
        this.currentUser = data;
        //remove input fields and repopulate table
        document.getElementById("cc").innerHTML = `${this.ccPipe.transform(this.currentUser.ccNumber)}`;
        document.getElementById("password").innerHTML = "********";
        document.getElementById("phoneNumber").innerHTML = `${this.currentUser.phoneNumber}`
        document.getElementById("address").innerHTML = `${this.currentUser.address}`
        this.buttons = "edit"
      });



    } else {
      alert("Invalid credit card input detected. Please try again.");
    }
  }

  discardChanges() {

    document.getElementById("cc").innerHTML = `${this.ccPipe.transform(this.currentUser.ccNumber)}`;
    document.getElementById("password").innerHTML = "********";
    document.getElementById("email").innerHTML = `${this.currentUser.email}`
    document.getElementById("phoneNumber").innerHTML = `${this.currentUser.phoneNumber}`
    document.getElementById("address").innerHTML = `${this.currentUser.address}`
    this.buttons = "edit"
  }

  deleteAccount() {

    this.infoService.deleteAccount(this.currentUser.email).subscribe(() => {
      alert("Your account was successfully deleted :(");
      this.cart.items = [];
      localStorage.clear();
      this.router.navigate(['/']);
    })
  }

}
