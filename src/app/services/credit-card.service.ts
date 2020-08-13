import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'; 
import { CreditCard } from '../domain/credit-card';
import { Observable , of } from 'rxjs';
import { catchError , tap, timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http : HttpClient , ) { }

  getCreditCards( url : string ) : Observable<CreditCard[]> {
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem("user") + ':' + localStorage.getItem("password"))
    });

    return this.http.get<CreditCard[]>(url , {headers : headers}).pipe(
      timeout(7000),
      tap(_ => this.log('fetched credit card')),
      catchError(this.handleError<CreditCard[]>('getCreditCards', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`CreditCardService: ${message}`);
  }

}
