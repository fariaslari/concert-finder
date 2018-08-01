import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventInfo } from 'src/app/models/eventInfo.model';
import * as moment from 'moment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  pastShow: boolean;
  @Input() eventInfo: EventInfo;

  constructor() { }

  ngOnInit() {
    this.pastShow = moment().isAfter(this.eventInfo.date);
  }
}
