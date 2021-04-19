import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderItem } from 'src/app/models/OrderItem';
import { Game } from '../../models/Game';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemurl = 'http://localhost:8080/items/games/';
  orderurl = 'http://localhost:8080/order';
  constructor(private http: HttpClient) {}

  gamesForOrder: Game[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  items = [];

  // addToCart(upc: number) {
  //   return this.http.get<Game>(`${this.itemurl}${upc}`);
  // }
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  checkout() {
    //Tracking a consistent order number scheme in the db is something
    //A microservice would be good for
    let orderNumber: number = Math.floor(Math.random() * 1000000000);
    let user = localStorage.getItem('token');
    //Quantity could be dynamic here if we implement
    let games = this.formatItems(this.items, orderNumber);
    let total = this.getTotal(this.items);
    let order = new Order(orderNumber, user, total, games);
    order.setDates();
    console.log(order);
  }
  getTotal(items: Game[]) {
    let result: number = 0;
    items.forEach((element) => {
      result += element.price;
    });
    return result;
  }

  formatItems(items: Game[], orderNumber: number) {
    let result: OrderItem[] = [];
    items.forEach((item) => {
      result.push(new OrderItem(orderNumber, item.upc, 1));
    });
    return result;
  }
}
