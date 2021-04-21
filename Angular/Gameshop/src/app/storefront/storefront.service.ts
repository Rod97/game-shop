import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root',
})
export class StorefrontService {
  public allGames: Game[] = [];
  public ps2Games: Game[] = [];
  public gcGames: Game[] = [];
  public xbGames: Game[] = [];
  public dcGames: Game[] = [];
  public rsGames: Game[] = [];

  baseurl =
    'http://gsdb-env.eba-fv8dzysz.us-east-2.elasticbeanstalk.com/items/games/';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  GetGames(): Observable<Game> {
    return this.http.get<Game>(`${this.baseurl}`);
  }
  GetGameByUpc(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.baseurl}${id}`);
  }
  searchGames(search: string) {
    if (search.length >= 1) {
      this.rsGames = this.allGames.filter((Game) => {
        if (Game.itemName.includes(search)) {
          return Game;
        } else {
          return false;
        }
      });
    } else {
      this.rsGames = [];
    }
  }
}
