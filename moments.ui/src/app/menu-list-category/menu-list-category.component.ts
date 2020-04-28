import { Component,HostBinding, Input, OnInit } from '@angular/core';
import { Category} from '../category'
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-menu-list-category',
  templateUrl: './menu-list-category.component.html',
  styleUrls: ['./menu-list-category.component.css']
})
export class MenuListCategoryComponent implements OnInit {
  @Input() category: Category;

  constructor(private routerService: RouterService) {

   }

  ngOnInit() {
  }
  routeToCategoryListView(categoryId){
    this.routerService.routeToCategoryListView(categoryId);     
   }
}
