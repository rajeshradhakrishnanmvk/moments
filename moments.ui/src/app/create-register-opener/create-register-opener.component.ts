import { Component, OnInit } from '@angular/core';

import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-create-register-opener',
  templateUrl: './create-register-opener.component.html',
  styleUrls: ['./create-register-opener.component.css']
})
export class CreateRegisterOpenerComponent implements OnInit {

  constructor(private dialog: MatDialog, private activateRoute
    : ActivatedRoute,
        private routerService: RouterService) {
        const userId =  this.activateRoute.snapshot.paramMap.get('userId');
        this.dialog.open(RegisterComponent, {
          data: {
            userId : userId
          }
        }).afterClosed().subscribe(result => {
          this.routerService.routeBack();
        });
        }

  ngOnInit() {
  }

}
