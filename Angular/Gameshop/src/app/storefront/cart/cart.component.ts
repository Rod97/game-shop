import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Game } from '../../models/Game';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Game[];
  constructor(private cart: CartService) { }
  buttons = "edit"

  ngOnInit(): void {
    this.cartItems = this.cart.getItems();
  }

  removeItem(id: string) {
    let index = parseInt(id);
    this.cartItems.splice(index, 1);
  }

  checkout() {
    if (this.cartItems[0] != undefined) {
      this.cart.checkout().subscribe();
      this.buttons = "buy";
      setTimeout(() => this.cartItems = undefined, 2500);
      this.cart.clearCart();
    } else {
      this.buttons = "error";
    }
  }
}
