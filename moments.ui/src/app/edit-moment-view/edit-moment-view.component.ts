import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NasaService } from '../services/nasa.service';
import { Moment } from '../moment';
import { Category } from '../category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-edit-moment-view',
  templateUrl: './edit-moment-view.component.html',
  styleUrls: ['./edit-moment-view.component.css']
})
export class EditMomentViewComponent implements OnInit {
  moment: Moment = new Moment();
  categories: Array<Category> = [];
  errMessage: string;
  constructor(private dialogRef: MatDialogRef<EditMomentViewComponent>
    , @Inject(MAT_DIALOG_DATA)
    private data: any
    , private nasaService: NasaService
    , private categoryService: CategoryService) {
    this.categoryService.fetchCategoriesFromServer();
    this.moment = this.nasaService.getMomentById(this.data.momentId);
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      data => this.categories = data,
      error => {
        if (404 === error.status) {
          console.log(error.message);
        } else {
          console.log(error.message);
        }
      }
    );
    this.moment = this.nasaService.getMomentById(this.data.momentId);
  }
  onSave() {
    this.nasaService.editMoment(this.moment).subscribe(editMoment => {
      this.dialogRef.close();
    },
      error => {
        if (404 === error.status) {
          this.errMessage = error.message;
        } else {
          this.errMessage = error.message;
        }
      });
  }
}
