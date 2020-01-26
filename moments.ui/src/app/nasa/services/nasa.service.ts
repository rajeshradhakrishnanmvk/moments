import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Moment } from '../../moment';
import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class NasaService {
  momentsUrl = 'api/moments';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('momentsService');
  }

  /** GET moments from the server */
  getMoments (): Observable<Moment[]> {
    return this.http.get<Moment[]>(this.momentsUrl)
      .pipe(
        catchError(this.handleError('getMoments', []))
      );
  }

  /* GET moments whose name contains search term */
  searchMoments(term: string): Observable<Moment[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Moment[]>(this.momentsUrl, options)
      .pipe(
        catchError(this.handleError<Moment[]>('searchMoments', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new Moment to the database */
  addMoment (Moment: Moment): Observable<Moment> {
    return this.http.post<Moment>(this.momentsUrl, Moment, httpOptions)
      .pipe(
        catchError(this.handleError('addMoment', Moment))
      );
  }

  /** DELETE: delete the Moment from the server */
  deleteMoment (id: number): Observable<{}> {
    const url = `${this.momentsUrl}/${id}`; // DELETE api/moments/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMoment'))
      );
  }

  /** PUT: update the Moment on the server. Returns the updated Moment upon success. */
  updateMoment (Moment: Moment): Observable<Moment> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Moment>(this.momentsUrl, Moment, httpOptions)
      .pipe(
        catchError(this.handleError('updateMoment', Moment))
      );
  }
}
