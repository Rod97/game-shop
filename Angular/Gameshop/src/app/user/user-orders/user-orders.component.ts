import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from './user-orders.service';

@Component({
  selector: 'user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  constructor(private userOrdersService: UserOrdersService) {}

  ngOnInit(): void {
    let email: string;
    email = localStorage.getItem('token');
    this.userOrdersService.getUserOrders(email).subscribe((data) => {
      this.orders = data;
    });
  }

  //Store User Orders
  orders: any;
}
