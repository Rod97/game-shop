import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseurl = 'http://localhost:8080/user/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //Send post request with user login input, check for match
  loginUser(email: string, password: string): Observable<User> {
    //Using get to work w/mock db we have, this should probably be post w/
    let credentials = {email,password};
    return this.http.post<User>(
      `${this.baseurl}login`, JSON.stringify(credentials), this.httpOptions
    ).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  logoutUser(){
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
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
    alert("Login failed. Try again.")
    return throwError(errorMessage);
  }
}
