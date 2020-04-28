import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Moment } from '../moment'
import { MomentSearchService } from '../services/moment-search.service';
import { NasaService } from '../services/nasa.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../category';

@Component({
  selector: 'app-moment-search',
  templateUrl: './moment-search.component.html',
  providers: [MomentSearchService],
  styleUrls: ['.//moment-search.component.css']
})
export class MomentSearchComponent implements OnInit {
  withRefresh = false;
  moments$: Observable<Moment[]>;
  private searchText$ = new Subject<string>();
  categories: Array<Category> = [];

  constructor(private searchService: MomentSearchService
    , private momentsService: NasaService
    , private categoryService: CategoryService) { }

  search(momentName: string) {
    this.searchText$.next(momentName);
  }

  ngOnInit() {
    this.moments$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(momentName =>
        this.searchService.search(momentName, this.withRefresh))
    );
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
  }




  toggleRefresh() { this.withRefresh = !this.withRefresh; }
  add(nasaMoment: Moment): void {
    nasaMoment.nasaId = nasaMoment.nasaId.trim();
    if (!nasaMoment.nasaId) {
      return;
    }
    //nasaMoment.id = 0;// The server will generate the id for this new moment
    nasaMoment.creationDate = new Date();
    nasaMoment.createdBy = "Front End";
    this.momentsService.addMoment(nasaMoment);
  }
}

