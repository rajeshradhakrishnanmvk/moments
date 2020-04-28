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
    return this.http.get<Array<Moment>>(this.serviceUrl + this.auth_Service.getUserId(), this.httpOptions)
      .subscribe(moments => {
        this.moments = moments;
        this.momentsSubject.next(this.moments);
      });
  }

  getMoments(): BehaviorSubject<Array<Moment>> {
    return this.momentsSubject;
  }

  addMoment(moment: Moment): Observable<Moment> {
    return this.http.post<Moment>(this.serviceUrl + this.auth_Service.getUserId(), moment, this.httpOptions)
      .pipe(tap(addedMoment => {
        console.log('Added Moment', addedMoment);
        this.fetchMomentsFromServer();
        //this.moments.push(addedMoment);
        //this.momentsSubject.next(this.moments);
      }), catchError(
        this.handleError<Moment>(`Unable to add Moments`))
      );
  }

  editMoment(moment: Moment): Observable<Moment> {
    return this.http.put<Moment>(this.serviceUrl + this.auth_Service.getUserId() + `/${moment.id}`, moment, this.httpOptions)
      .pipe(tap(editedMoment => {
        this.fetchMomentsFromServer();
        // const moment1 = this.moments.find(a_moment => a_moment.id === editedMoment.id);
        // Object.assign(moment1, editedMoment);
        // this.momentsSubject.next(this.moments);
      }), catchError(this.handleError<Moment>(`Unable to edit Moments`)));
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
