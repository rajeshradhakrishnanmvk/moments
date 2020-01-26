import { Component, OnInit } from '@angular/core';

import { Moment } from '../moment';
import { NasaService } from './services/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  providers: [NasaService],
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  moments: Moment[];
  editMoment: Moment; // the moment currently being edited

  constructor(private momentsService: NasaService) {}

  ngOnInit() {
    this.getMoments();
  }

  getMoments(): void {
    this.momentsService.getMoments()
      .subscribe(moments => (this.moments = moments));
  }

  add(nasa_id: string): void {
    this.editMoment = undefined;
    nasa_id = nasa_id.trim();
    if (!nasa_id) {
      return;
    }

    // The server will generate the id for this new moment
    const newMoment: Moment = { nasa_id } as Moment;
    this.momentsService
      .addMoment(newMoment)
      .subscribe(moment => this.moments.push(moment));
  }

  delete(moment: Moment): void {
    this.moments = this.moments.filter(h => h !== moment);
    this.momentsService
      .deleteMoment(moment.id)
      .subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.momentsService.deleteMoment(moment.id);
    */
  }

  edit(moment: Moment) {
    this.editMoment = moment;
  }

  search(searchTerm: string) {
    this.editMoment = undefined;
    if (searchTerm) {
      this.momentsService
        .searchMoments(searchTerm)
        .subscribe(moments => (this.moments = moments));
    }
  }

  update() {
    if (this.editMoment) {
      this.momentsService
        .updateMoment(this.editMoment)
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

