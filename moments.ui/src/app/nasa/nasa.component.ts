import { Component, OnInit, Input } from '@angular/core';

import { Moment } from '../moment';
import { NasaService } from '../services/nasa.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  providers: [NasaService],
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  @Input() moment: Moment;
  moments: Moment[];
  editMoment: Moment; // the moment currently being edited

  constructor(private momentsService: NasaService,
    private routerService: RouterService) { }

  ngOnInit() {
    this.getMoments();
  }

  getMoments(): void {
    this.momentsService.getMoments()
      .subscribe(moments => (this.moments = moments));
  }

  delete(moment: Moment) {
    this.momentsService
      .deleteMoment(moment)
      .subscribe(moment => {
        console.log('Moment is deleted.');
      });
  }


  edit(moment: Moment) {
    this.editMoment = moment;
    this.routerService.routeToEditMomentView(moment.id);
  }

  update() {
    if (this.editMoment) {
      this.momentsService
        .editMoment(this.editMoment)
        .subscribe(moment => {
          // replace the moment in the moments list with update from server
          const ix = moment ? this.moments.findIndex(h => h.id === moment.id) : -1;
          if (ix > -1) {
            this.moments[ix] = moment;
          }
        });
      this.editMoment = undefined;
    }
  }
}

