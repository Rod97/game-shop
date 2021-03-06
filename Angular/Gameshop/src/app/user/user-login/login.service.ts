import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseurl = 'http://52.14.75.195:8085/user/';

  constructor(private http: HttpClient, private router: Router) {}

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
 
  recoverPassword(email:string){
    return this.http.get<User>(
      `${this.baseurl}recover/${email}`
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
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
