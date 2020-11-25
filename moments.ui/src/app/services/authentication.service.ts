import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import * as jwd_decode from 'jwt-decode';
import { User } from '../user';
import { resolve } from 'url';
import { environment } from '../../environments/environment';

export const TOKEN_NAME: string = 'JWT_TOKEN'
export const USER_ID: string = 'USER_ID'

@Injectable()
export class AuthenticationService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
  private serviceUrl = environment.authservice;//'http://localhost:8081/auth/';
  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();
  // private _userLoggedinSource = new BehaviorSubject<string>("");
  // _userLoggedinStatus$ = this._userLoggedinSource.asObservable();

  private loggedIn = false;
  constructor(private http: HttpClient) {
    this.loggedIn = !!this.getBearerToken();
    this._authNavStatusSource.next(this.loggedIn);
  }

  setBearerToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getBearerToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
  setUserId(userId) {
    localStorage.setItem(USER_ID, userId);
  }

  getUserId() {
    return localStorage.getItem(USER_ID);
  }

  deleteToken(): void {
    localStorage.removeItem(TOKEN_NAME);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwd_decode(token);
    if (decoded.exp === undefined) return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getBearerToken();
    if (!token) return true;
    const date = this.getTokenExpirationDate(token);
    if (date === undefined || date === null) return false;
    return !(date.valueOf() > new Date().valueOf());
  }


  authenticateUser(data: User) {
    const url = this.serviceUrl + 'login'
    const json = JSON.stringify(data);
    return this.http.post(url, json, { headers: this.headers })
      .toPromise()
      .then(res => {
        this.setBearerToken(JSON.parse(res.toString()).token);
        this.setUserId(data.userid);
        //this._userLoggedinSource.next(data.userid);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      })
      .catch(this.handleError());
  }

  registerUser(data: User) {
    const url = this.serviceUrl + 'register'
    const json = JSON.stringify(data);
    return this.http.post(url, json, { headers: this.headers })
      .toPromise()
      .then(res => res)
      .catch(this.handleError());
  }

  logout() {
    this.deleteToken();
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
  private handleError() {
    return (error: any): any => {
      if ((error.status === 404 || error.status === 403)) {
        console.error(error);
        this.log(`Failed: Server Error`);
      }
      return Observable.throw(error);

    };
  }
  private log(message: string) {
    console.log(`Login Service: ${message}`);
  }
}
