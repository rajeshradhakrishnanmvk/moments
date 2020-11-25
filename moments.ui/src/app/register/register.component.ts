import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user'
import { UserprofileService } from '../services/userprofile.service';
import { AuthenticationService } from '../services/authentication.service'
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userprofile: User = new User('', '');
  userid: string;
  errMessage: string;
  registerUser: string;
  constructor(private userService: UserprofileService
    , private _authService: AuthenticationService
    , private routerService: RouterService) {
    //this.userid=this.data.userid;
  }

  ngOnInit() {
    //this.userid=this.data.userid;
  }
  onSave() {
    this.userprofile.fullName();
    this._authService.registerUser(this.userprofile)
      .then(
        res => {
          if (res) {
            this.performLogin();
          }
        }
      )
      .catch(this.handleError());;
  }
  performLogin() {
    this._authService.authenticateUser(this.userprofile)
      .then(
        res => {
          if (res) {
            this.AddUserDetails();
          }
          else {
            this.errMessage = "No token found"
          }
        }
      )
      .catch(this.handleError());;
  }
  AddUserDetails() {
    this.userService.addUser(this.userprofile).subscribe(editUser => {
      //this.dialogRef.close();
    },
      error => {
        if (404 === error.status) {
          this.errMessage = error.message;
        } else {
          this.errMessage = error.message;
        }
      });
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
