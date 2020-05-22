import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Moment } from '../moment';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class NasaService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  serviceUrl = environment.momentsservice;  // URL to web api
  private handleError: HandleError;
  moments: Array<Moment>;
  momentsSubject: BehaviorSubject<Array<Moment>>;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private auth_Service: AuthenticationService) {
    this.handleError = httpErrorHandler.createHandleError('momentsService');
    this.moments = [];
    this.momentsSubject = new BehaviorSubject(this.moments);
    this.fetchMomentsFromServer();
  }
  ngOnInit() {
    this.fetchMomentsFromServer();
  }
  fetchMomentsFromServer() {
    return this.http.get<Array<Moment>>(this.serviceUrl + '/' + this.auth_Service.getUserId(), this.httpOptions)
      .subscribe(moments => {
        this.moments = moments;
        this.momentsSubject.next(this.moments);
      });
  }

  getMoments(): BehaviorSubject<Array<Moment>> {
    return this.momentsSubject;
  }

  addMoment(Moment: Moment): Observable<Moment> {
    const url = this.serviceUrl + '/' + this.auth_Service.getUserId();
    return this.http.post<Moment>(url, Moment)
      .pipe(tap(addedMoment => {
        console.log('Added Moment', addedMoment);
        this.fetchMomentsFromServer();
      }), catchError(
        this.handleError<Moment>(`Unable to add Moments`))
      );
  }

  editMoment(moment: Moment): Observable<Moment> {
    return this.http.put<Moment>(this.serviceUrl + '/' + this.auth_Service.getUserId() + `/${moment.id}`, moment, this.httpOptions)
      .pipe(tap(editedMoment => {
        this.fetchMomentsFromServer();
      }), catchError(this.handleError<Moment>(`Unable to edit Moments`)));
  }

  deleteMoment(moment: Moment): Observable<Moment> {
    return this.http.delete<Moment>(this.serviceUrl + '/' + this.auth_Service.getUserId() + `/${moment.id}`)
      .pipe(tap(deleteMoment => {
        this.fetchMomentsFromServer();
      }), catchError(this.handleError<Moment>(`Unable to delete Moments`)));
  }
  getMomentById(momentId): Moment {
    const moment = this.moments.find(b_moment => b_moment.id === momentId);
    return Object.assign({}, moment);
  }

  getMomentByCateogoryId(categoryId): Moment {
    const moment = this.moments.find(b_moment => b_moment.category.id === categoryId);
    return Object.assign({}, moment);
  }
}
