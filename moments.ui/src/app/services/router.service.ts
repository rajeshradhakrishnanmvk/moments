import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterService {

  constructor(public router: Router, private location: Location) { }

  routeToDashboard() {
    this.router.navigate(['moments']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToEditMomentView(momentId) {
    this.router.navigate(
      [
        'space-moments',
        {
          outlets: {
            momentEditOutlet: ['moment', momentId, 'edit']
          }
        }
      ]
    );
  }

  routeBack() {
    this.location.back();
  }

  routeToNoteView() {
    this.router.navigate(['dashboard']);
  }
  routeToCategoryListView(categoryId) {
    this.router.navigate(["category/" + categoryId])
  }


  routeToRegisterView(userId) {
    this.router.navigate([
      'login',
      {
        outlets: {
          userEditOutlet: ['user', userId, 'edit']
        }
      }
    ]);
  }

  routeToCategoryView(categoryId) {
    this.router.navigate(['category',
      {
        outlets: {
          categoryEditOutlet: ['category', categoryId]
        }
      }]);
  }
}
