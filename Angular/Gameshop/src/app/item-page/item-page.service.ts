import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class ItemPageService {

  baseurl = 'http://52.14.75.195:8085/items/'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Pick up games from the url by UPC
  GetGames(upc: number): Observable<Game> {
    return this.http.get<Game>(`${this.baseurl}/games/${upc}`)
  }

}
