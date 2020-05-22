import { Component, OnInit } from '@angular/core';

import { EditMomentViewComponent } from '../edit-moment-view/edit-moment-view.component';
import { MatDialog } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-edit-moment-opener',
  templateUrl: './edit-moment-opener.component.html',
  styleUrls: ['./edit-moment-opener.component.css']
})
export class EditMomentOpenerComponent implements OnInit {

  constructor(private dialog: MatDialog, private activateRoute
    : ActivatedRoute,
    private routerService: RouterService) {
    const momentId =
      +this.activateRoute.snapshot.paramMap.get('momentId');
    this.dialog.open(EditMomentViewComponent, {
      data: {
        momentId: momentId
      }
    }).afterClosed().subscribe(result => {
      this.routerService.routeBack();
    });
  }

  ngOnInit() {
  }

}

