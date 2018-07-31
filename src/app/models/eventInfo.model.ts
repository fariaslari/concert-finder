import * as moment from 'moment';

export class EventInfo {
    id: number;
    location_name: string;
    address: string;
    city: string;
    country: string;
    date: string;
    on_sale_date?: string;
    sales_has_started: boolean;
    tickets_url?: string;
    latitude: number;
    longitude: number;


    constructor(event: any){
        this.id = event.id;
        this.location_name = event.venue ? event.venue.name : "";
        this.address = "";
        this.city = event.venue ? event.venue.city : "";
        this.country = event.venue ? event.venue.country : "";
        this.date = moment(event.datetime).format("MM/DD/YY");
        this.on_sale_date = moment(event.on_sale_datetime).isValid() ? moment(event.on_sale_datetime).format("MM/DD/YY") : null;
        this.sales_has_started = moment().isAfter(moment(event.on_sale_datetime));
        this.tickets_url = null;
        this.latitude = event.venue ? event.venue.latitude : 0;
        this.longitude = event.venue ? event.venue.longitude : 0;

        let tickets = event.offers.find(offer => offer.type = 'Tickets');
        if(tickets){
            this.tickets_url = tickets.url;
        }
    }
}