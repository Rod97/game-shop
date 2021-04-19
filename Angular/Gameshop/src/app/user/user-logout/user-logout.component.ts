import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/storefront/cart/cart.service';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private router:Router, private cart:CartService) { }

  ngOnInit(): void {
    this.logoutUser();
  }
  logoutUser(){
    this.cart.items=[];
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
