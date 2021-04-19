import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/Game';
import { StorefrontService } from '../storefront/storefront.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  title = 'json-file-read-angular';
  public game: Game;
  // public allGames:Game[] = [];

  constructor(private storefrontService: StorefrontService, private Route: ActivatedRoute) { }

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

}
