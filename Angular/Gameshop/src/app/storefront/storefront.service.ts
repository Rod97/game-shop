import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class StorefrontService {

  baseurl = 'http://localhost:8080/items/games/'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  GetGames():Observable<Game>{
    return this.http.get<Game>(`${this.baseurl}`)
    
 }
 GetGameByUpc(id: string):Observable<Game>{
   console.log(id)
  return this.http.get<Game>(`${this.baseurl}${id}`)
  
}
    
}
