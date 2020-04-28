import { Injectable } from '@angular/core';
import { User } from '../user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from '../../environments/environment';
@Injectable()
export class UserprofileService {

  users: Array<User>;
  usersSubject: BehaviorSubject<Array<User>>;
  private serviceUrl = environment.userervice;//'http://localhost:8121/api/user/';

  constructor(private http: HttpClient, private auth_Service: AuthenticationService) {
    this.users = [];
    this.usersSubject = new BehaviorSubject(this.users);
  }
  fetchUsersFromServer() {
    return this.http.get<Array<User>>(this.serviceUrl)
      .subscribe(users => {
      this.users = users;
        this.usersSubject.next(this.users);
      });
  }

  getUser(): BehaviorSubject<Array<User>> {
    return this.usersSubject;
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.serviceUrl, user)
      .pipe(tap(addedUser => {
        console.log('Added User', addedUser);
        this.users.push(addedUser);
        this.usersSubject.next(this.users);
      }), catchError(this.handleError<User>(`Unable to add Users`)));
  }

  editNote(user: User): Observable<User> {
    return this.http.put<User>(this.serviceUrl + `/${user.userid}`, user)
      .pipe(tap(editedUser => {
        const user1 = this.users.find(a_user => a_user.userid === editedUser.userid);
        Object.assign(user1, editedUser);
        this.usersSubject.next(this.users);
      }), catchError(this.handleError<User>(`Unable to edit Users`)));
  }

  getUserById(userId): User {
    const user = this.users.find(b_user => b_user.userid === userId);
    return Object.assign({}, user);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return Observable.throw(error);
    };
  }
  private log(message: string) {
    console.log(`UserService: ${message}`);
  }

}
