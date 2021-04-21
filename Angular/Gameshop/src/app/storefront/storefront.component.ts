import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import { StorefrontService } from './storefront.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css'],
})
export class StorefrontComponent implements OnInit {
  title = 'json-file-read-angular';
  private game: Game;

  view = 'all';
  interval: any;
  constructor(private storefrontService: StorefrontService) {}

  ngOnInit(): void {
    if (this.storefrontService.allGames.length == 0) {
      this.storefrontService.GetGames().subscribe((data) => {
        for (let gameData in data) {
          this.game = data[gameData];
          this.game.image = this.formatImage(this.game.image);
          this.storefrontService.allGames.push(this.game);
        }
      });
    }
    this.view = 'all';
    this.interval = setInterval(() => this.rs(), 100);
  }

  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
  }

  all() {
    this.view = 'all';
  }

  ps2() {
    if (this.storefrontService.ps2Games.length == 0) {
      for (let i = 0; i < this.storefrontService.allGames.length; i++) {
        if (this.storefrontService.allGames[i].platform === 'PS2') {
          this.storefrontService.ps2Games.push(
            this.storefrontService.allGames[i]
          );
        }
      }
    }
    this.view = 'ps2';
  }

  gc() {
    if (this.storefrontService.gcGames.length == 0) {
      for (let i = 0; i < this.storefrontService.allGames.length; i++) {
        if (this.storefrontService.allGames[i].platform === 'GameCube') {
          this.storefrontService.gcGames.push(
            this.storefrontService.allGames[i]
          );
        }
      }
    }
    this.view = 'gc';
  }

  xb() {
    if (this.storefrontService.xbGames.length == 0) {
      for (let i = 0; i < this.storefrontService.allGames.length; i++) {
        if (this.storefrontService.allGames[i].platform === 'Xbox') {
          this.storefrontService.xbGames.push(
            this.storefrontService.allGames[i]
          );
        }
      }
    }
    this.view = 'xb';
  }

  dc() {
    if (this.storefrontService.dcGames.length == 0) {
      for (let i = 0; i < this.storefrontService.allGames.length; i++) {
        if (this.storefrontService.allGames[i].platform === 'Dreamcast') {
          this.storefrontService.dcGames.push(
            this.storefrontService.allGames[i]
          );
        }
      }
    }
    this.view = 'dc';
  }

  rs() {
    if (this.storefrontService.rsGames.length != 0) {
      if (this.view != 'rs') {
        this.view = 'rs';
      }
    } else {
      this.view = 'all';
    }
  }
}
