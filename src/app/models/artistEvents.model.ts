import { EventInfo } from '../models/eventInfo.model';

export class  ArtistEvents {
    upcomingEvents: number;
    events: EventInfo[];

    constructor(upcomingEvents: number, events: EventInfo[]){
        this.upcomingEvents = upcomingEvents;
        this.events = events;
    }
}