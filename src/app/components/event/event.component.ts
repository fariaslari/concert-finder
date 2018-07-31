import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventInfo } from "src/app/models/eventInfo.model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  @Input() eventInfo: EventInfo;

  constructor() { }

  ngOnInit() {
    
  }
}
