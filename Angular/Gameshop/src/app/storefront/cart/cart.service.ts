import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderItem } from 'src/app/models/OrderItem';
import { Game } from '../../models/Game';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemurl = 'http://localhost:8080/items/games/';
  orderurl = 'http://localhost:8080/order';
  constructor(private http:HttpClient) { }

  gamesForOrder:Game[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  items=[];

  // addToCart(upc: number) {
  //   return this.http.get<Game>(`${this.itemurl}${upc}`);
  // }
  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }


}
