import { Component, OnInit } from '@angular/core';
import inventory from '../../../backend/dummyinventory.json';
import {StorefrontService} from './storefront.service'

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {
  title = 'json-file-read-angular';
  public inventoryList:{upc:number,itemName:string,price:number,description:string,images:string,stock:number,platform:string}[];
  public inventory: any;

  

  constructor(private storefrontService: StorefrontService) { }

  ngOnInit(): void {
    this.storefrontService.GetGames().subscribe(data=> this.inventory = data); 
    console.log(this.inventory + "HEYO!");
    
  }
  


  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' +img;
}


}
