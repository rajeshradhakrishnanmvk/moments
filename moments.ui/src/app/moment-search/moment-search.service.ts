import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Moment } from '../moment';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';


export const searchUrl = 'https://images-api.nasa.gov/search';

const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh':  'true'
  })
};

function createHttpOptions(searchName: string, refresh = false) {
    // nasa images search api
    // e.g., https://images-api.nasa.gov/search?q=apollo'
    const params = new HttpParams({ fromObject: { q: searchName } });
    const headerMap = refresh ? {'x-refresh': 'true'} : {};
    const headers = new HttpHeaders(headerMap) ;
    return { headers, params };
}

@Injectable()
export class MomentSearchService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('MomentsService');
  }

  search (searchName: string, refresh = false): Observable<Moment[]> {
    // clear if no search name
    if (!searchName.trim()) { return of([]); }

    const options = createHttpOptions(searchName, refresh);

    // TODO: Add error handling
    return this.http.get(searchUrl, options).pipe(
      map((data: any) => {
        return data.collection.items.map((entry: any) => ({
            nasa_id: entry.data[0].nasa_id,
            title: entry.data[0].title,
            description: entry.data[0].description,
            href: entry.links? entry.links[0].href:''
          } as Moment )
        );
      }),
      catchError(this.handleError('search', []))
    );
  }
}

