import { Component, OnInit } from '@angular/core';

import { CategoryComponent } from '../category/category.component';
import { MatDialog } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';


@Component({
  selector: 'app-create-category-opener',
  templateUrl: './create-category-opener.component.html',
  styleUrls: ['./create-category-opener.component.css']
})
export class CreateCategoryOpenerComponent implements OnInit {

  constructor(private dialog: MatDialog, private activateRoute
    : ActivatedRoute,
        private routerService: RouterService) {
          const categoryId =
          +this.activateRoute.snapshot.paramMap.get('categoryId');
        this.dialog
        .open(CategoryComponent, {
          data: {
            categoryId : categoryId
          }
        }).afterClosed()
        .subscribe(result => {
          this.routerService.routeBack();
        });
        }

  ngOnInit() {
  }

}
