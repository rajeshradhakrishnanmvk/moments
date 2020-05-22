import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoryService } from '../services/category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category = new Category();
  errMessage: string;
  constructor(private dialogRef: MatDialogRef<CategoryComponent>, @Inject(MAT_DIALOG_DATA)
  private data: any
    , private categoryService: CategoryService) {
    if (this.data.categoryId != 0) {
      this.category = this.categoryService.getCategoryById(this.data.categoryId);
    }
  }

  ngOnInit() {

  }
  onSave() {
    this.category.createdBy = "FrontEnd";
    this.category.creationDate = new Date();
    if (this.data.categoryId == 0) {
      this.categoryService.addCategory(this.category).subscribe(editCategory => {
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
    else {
      this.categoryService.editCategory(this.category).subscribe(editCategory => {
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
}
