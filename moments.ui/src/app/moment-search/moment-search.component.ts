import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import {Moment} from '../moment'
import { MomentSearchService } from './moment-search.service';

@Component({
  selector: 'app-moment-search',
  templateUrl: './moment-search.component.html',
  providers: [ MomentSearchService ],
  styleUrls: ['.//moment-search.component.css']
})
export class MomentSearchComponent implements OnInit {
  withRefresh = false;
  moments$: Observable<Moment[]>;
  private searchText$ = new Subject<string>();

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
  }

  constructor(private searchService: MomentSearchService) { }


  toggleRefresh() { this.withRefresh = ! this.withRefresh; }

}

