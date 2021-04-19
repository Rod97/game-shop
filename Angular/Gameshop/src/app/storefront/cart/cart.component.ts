import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/Game';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:Game[];
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cartItems=this.cart.getItems();
  }

}
