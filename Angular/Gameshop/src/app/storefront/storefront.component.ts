import { Component, OnInit } from '@angular/core';
import inventory from '../../../backend/dummyinventory.json';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {
  title = 'json-file-read-angular';
  public inventoryList:{upc:number,itemName:string,price:number,description:string,images:string,stock:number,platform:string}[] = inventory;

  constructor() { }

  ngOnInit(): void {
  }

}
