import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: User = new User();

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.registerService.CreateUser(this.model).subscribe(data => {
      this.model = data;
      for(let value in this.model){
        if(!value){
          alert("Registration failed. Try again.");
          return;
        }
      }
      alert("Registration successful. You will be redirected to the login page.")
      this.router.navigate(['/login']);
    })
  }

  //formats input for name fields to autocapitalize first letter
  firstnameuppercase(value: string) {
    if (value.length > 0) {
      this.model.firstname = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstname = value;
    }
  }
  lastnameuppercase(value: string) {
    if (value.length > 0) {
      this.model.lastname = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.lastname = value;
    }
  }
}
