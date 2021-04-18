import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import {StorefrontService} from './storefront.service'

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {
  title = 'json-file-read-angular';
  private game:Game;
  public allGames:Game[] = [];

  

  constructor(private storefrontService: StorefrontService) { }

  ngOnInit(): void {
    this.storefrontService.GetGames().subscribe(data=> {
      for(let gameData in data){
        this.game=data[gameData];
        this.game.image=this.formatImage(this.game.image);
        this.allGames.push(this.game);
      }
      
      
      
      
      // this.inventory = data
      // console.log(this.inventory)
      // for(let gameData in this.inventory){
      //   this.game=JSON.parse(gameData);
      //   console.log(this.game.itemName);
      //   // this.game.images=this.formatImage(this.game.images)
      //   this.allGames.push(this.game);
      // }
    });     
  }
  


  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' +img;
}


}
