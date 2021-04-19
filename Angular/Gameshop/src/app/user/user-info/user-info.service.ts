import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  baseurl = 'http://localhost:8080/user/';

  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //Send post request with user login input, check for match
  getUserInfo(email: string): Observable<User> {
    //Using get to work w/mock db we have, this should probably be post w/
    return this.http.get<User>(
      `${this.baseurl}${localStorage.getItem("token")}`
    ).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

   // Error handling
   errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}