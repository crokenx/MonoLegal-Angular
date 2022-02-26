import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Response, Bill, ChangeStatus } from './bills.service.interface';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {}

  getBills(): Observable<Bill[]> {
    const url = `${ this.apiUrl }/api/bills`;

    return this.http.get<Response>(url)
    .pipe(
      map(res => res.bills),
      catchError(this.handleError<Bill[]>('getBills', []))
    );

  }

  changeBillState(bill: Bill): Observable<Bill> {
    const url = `${ this.apiUrl }/api/bills`;

    const _id = bill._id;
    const body = { _id };

    return this.http.put<ChangeStatus>(url, body)
    .pipe(
      map(res => res.response),
      catchError(this.handleError<Bill>('changeBillState', bill))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  log(message: String) {
    console.log(message);
  }
}
