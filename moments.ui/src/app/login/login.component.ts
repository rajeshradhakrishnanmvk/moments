import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public bearerToken: any;
  public submitMessage: string;
  userid = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  //user = new User(this.username.value,this.password.value);
  frmLogin = new FormGroup({
    userid: this.userid,
    password: this.password
  });
  constructor(private _authService: AuthenticationService, public routerService: RouterService) { }

  loginSubmit() {
    this._authService.authenticateUser(this.frmLogin.value)
      .then(
        res => {
          if (res) {
            //this._authService.setBearerToken(JSON.parse(res).token);
            //this._authService.setUserId(this.frmLogin.value.userid)
            this.routerService.routeToDashboard();
          }
          else {
            this.submitMessage = "No token found"
          }
        }
      )
      .catch(this.handleError());;
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
    console.log(`NotesService: ${message}`);
  }
}
