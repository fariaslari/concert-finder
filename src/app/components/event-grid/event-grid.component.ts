import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventInfo } from 'src/app/models/eventInfo.model';
import { ArtistEvents } from 'src/app/models/artistEvents.model';
import { CacheService } from '../../services/cache.service';
import * as moment from 'moment';

@Component({
  selector: 'app-event-grid',
  templateUrl: './event-grid.component.html',
  styleUrls: ['./event-grid.component.css']
})
export class EventGridComponent implements OnInit {

  eventsData: ArtistEvents;
  initialDate: any;
  finalDate: any;
  currentFilter: any;
  interval: string = null;
  loading: boolean;

  @Input() filter: any;
  @Input() upcomingEvents: number;

  constructor(private EventsService: EventsService, private cache: CacheService) { }

  ngOnInit() {
      let cacheData = this.cache.get("events_" + this.filter, true);
      if(cacheData && this.currentFilter == this.filter){
        this.eventsData = cacheData;
      }else{
        this.currentFilter = this.filter;
        this.initialDate = null;
        this.finalDate = null;
        this.fetchData();
      }
  }

  ngOnChanges() {
      this.currentFilter = this.filter;
      this.initialDate = null;
      this.finalDate = null;
      this.fetchData();
  }


  filterByDate(){
    this.interval = moment(this.initialDate).format("YYYY-MM-DD") + "," + moment(this.finalDate).format("YYYY-MM-DD");

    this.fetchData();
  }

  private fetchData(){
    this.eventsData = null;
    this.loading = true;
     this.EventsService.getEvents(this.currentFilter, (this.interval || null))
        .subscribe(res => {
            if (res && Object.keys(res).length > 0) {
                this.eventsData = this.formatData(res);
                this.cache.set("events_" + this.filter, this.eventsData, true);
                this.loading = false;
            }else{
              this.eventsData = null;
              this.loading = false;
            }
        }, (err) => {
            this.eventsData = null;
            this.loading = false;
        });
  }

  private formatData(res: any) : ArtistEvents{
    let events: EventInfo[] = res.map((ev)=>{
      return new EventInfo(ev);
    });
    
    return new ArtistEvents(this.upcomingEvents, events);
  }

}
