import { Injectable, OnInit } from '@angular/core';
import { Category } from '../category';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from '../../environments/environment';


@Injectable()
export class CategoryService implements OnInit {
  categories: Category[];// Array<Category>;
  categoriesSubject: BehaviorSubject<Category[]>;//BehaviorSubject<Array<Category>>;
  private serviceUrl = environment.cateservice;

  constructor(private http: HttpClient, private auth_Service: AuthenticationService) {
    this.categories = [];
    this.categoriesSubject = new BehaviorSubject(this.categories);
    this.fetchCategoriesFromServer();
  }
  ngOnInit() {
    //this.subscription = this.auth_Service._userLoggedinStatus$.subscribe(user => this.user = user);
    this.fetchCategoriesFromServer();
  }
  fetchCategoriesFromServer() {
    if (this.auth_Service.getUserId() != null) {
      const url = this.serviceUrl + 'user/' + this.auth_Service.getUserId();
      return this.http.get<Category[]>(url)
        .subscribe(categories => {
          this.categories = categories;
          this.categoriesSubject.next(this.categories);
        });
    }

  }

  getCategories(): BehaviorSubject<Category[]> {
    return this.categoriesSubject;
  }

  getCategoryById(CategoryId): Category {
    const Category = this.categories.find(b_Category => b_Category.id === CategoryId);
    return Object.assign({}, Category);
  }

  addCategory(Category: Category): Observable<Category> {
    return this.http.post<Category>(this.serviceUrl, Category)
      .pipe(tap(addedCategory => {
        console.log('Added Note', addedCategory);
        this.categories.push(addedCategory);
        this.categoriesSubject.next(this.categories);
      }), catchError(this.handleError<Category>(`Unable to add Category`)));
  }

  editCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.serviceUrl + `${category.id}`, category)
      .pipe(tap(editedCategory => {
        const Category1 = this.categories.find(a_category => a_category.id === editedCategory.id);
        Object.assign(Category1, editedCategory);
        this.categoriesSubject.next(this.categories);
      }), catchError(this.handleError<Category>(`Unable to edit Category`)));
  }

  deleteCategory(CategoryId) {
    return this.http.delete<Boolean>(this.serviceUrl + '/' + CategoryId)
      .toPromise()
      .then(res => res)
      .catch(this.handleError<Boolean>(`Unable to delete Category`));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return Observable.throw(error);
    };
  }
  private log(message: string) {
    console.log(`Category Service: ${message}`);
  }

}
