import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
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
  orders: Order[];

  //Image formatting from item page
  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
  }
}
