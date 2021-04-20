import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Order } from '../../models/Order';

@Injectable({
  providedIn: 'root',
})
export class UserOrdersService {
  baseurl = 'http://localhost:8080/order/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //Get all users orders
  getUserOrders(email: string): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${this.baseurl}${email}`)
      .pipe(retry(1), catchError(this.errorHandler));
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
