import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../../models/User';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseurl = 'http://52.14.75.195:8085/user/'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  CreateUser(data):Observable<User>{
    return this.http.post<User>(`${this.baseurl}postuser`, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  UpdateUser(data):Observable<User>{
    return this.http.put<User>(`${this.baseurl}`, JSON.stringify(data), this.httpOptions)
  }

  //Error handling
  errorHandler(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Get client-side error
      errorMessage = error.error.message;
    }else{
      //Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
