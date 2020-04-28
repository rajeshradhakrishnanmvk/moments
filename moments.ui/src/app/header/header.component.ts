import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';
import { Subscription } from 'rxjs';
import { Category } from '../category';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  status: boolean;
  subscription: Subscription;
  navCategory: Array<Category>;

  constructor(private routerService: RouterService
    , private _authService: AuthenticationService
    , private categoryService: CategoryService
            ) {

    this.categoryService.fetchCategoriesFromServer();

  }
  ngOnInit() {
    this.subscription = this._authService.authNavStatus$.subscribe(status => this.status = status);
    this.categoryService.getCategories().subscribe(
      data => this.navCategory = data,
      error => {
        if (404 === error.status) {
          console.log(error.message);
        } else {
          console.log(error.message);
        }
      }
    );
  }

  login() {
    this.routerService.routeToLogin();
  }
  dashboard() {
    this.routerService.routeToDashboard();
  }
  OpenRegisterView() {
    this.routerService.routeToRegisterView('test');
  }
  logout() {
    this._authService.logout();
    this.login();
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
