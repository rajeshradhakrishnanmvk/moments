import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable, Subscription } from 'rxjs';
import { RouterService } from '../services/router.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../category';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  status: boolean;
  subscription: Subscription;
  @Input() category: Category;

  constructor(private routerService: RouterService
    , private categoryService: CategoryService
    , private _authService: AuthenticationService) { }

  ngOnInit() {
    this.subscription = this._authService.authNavStatus$.subscribe(status => this.status = status);
    this.categoryService.fetchCategoriesFromServer();
  }

  displayedColumns = ['description', 'name', 'createby', 'creationdate', 'edit', 'delete'];
  dataSource = new CategoryDataSource(this.categoryService);

  OpenCategoryView(categoryId) {
    this.routerService.routeToCategoryView(categoryId);
  }

  deleteCategory(categoryId) {
    if (this.status) {
      this.categoryService.deleteCategory(categoryId);
      this.dataSource = new CategoryDataSource(this.categoryService);
    } else {
      //alert('Login in Before');
    }
  }
}
export class CategoryDataSource extends DataSource<any> {
  constructor(private dataService: CategoryService) {
    super();
  }

  connect(): Observable<Category[]> {
    return this.dataService.getCategories();
  }

  disconnect() {
  }
}