import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from '../services/nasa.service';
import { Moment } from '../moment';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
  categoryId: Number = 0;
  categoryMoments: Array<Moment>;
  constructor(private activateRoute
    : ActivatedRoute,
    private nasaService: NasaService) {
    this.categoryId =
      +this.activateRoute.snapshot.paramMap.get('categoryId');
  }

  ngOnInit() {
    this.nasaService.getMoments().subscribe(
      data => {
        this.categoryMoments = data.filter(moment => this.categoryId === moment.category.id);
      },
      error => {
        if (404 === error.status) {
          console.log(error.message);
        } else {
          console.log(error.message);
        }
      }
    );
  }
}
