import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/Game';
import { CartService } from '../storefront/cart/cart.service';
import { StorefrontService } from '../storefront/storefront.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  public game: Game;
  //public gameForOrder:Game;
  public items:Game[] = [];
  public itemCount:number;

  constructor(private storefrontService: StorefrontService, private Route: ActivatedRoute, private cart:CartService) { }

  ngOnInit(): void {
    console.log(this.Route.snapshot.paramMap.get("id"))

    this.storefrontService.GetGameByUpc(this.Route.snapshot.paramMap.get("id")).subscribe(data=> {
        this.game=data;
        this.game.image=this.formatImage(this.game.image);
    });
  }

  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
  }

  addToCart(){
    this.cart.addToCart(this.game);
    window.alert("You're item has been added to the cart!");
  }

  

}
