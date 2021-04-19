import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class ItemPageService {

  baseurl = 'http://localhost:8080/items/'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  GetGames(upc: number):Observable<Game>{
    return this.http.get<Game>(`${this.baseurl}/games/${upc}`)
    
 }
    
}
