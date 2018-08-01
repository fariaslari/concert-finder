import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  }),
  params: new HttpParams().set('app_id', environment.app_id)
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) {}

  getEvents(artist: string, interval?: string): Observable<Object> {
    if (interval) {
      httpOptions.params = httpOptions.params.append('date', interval);
    }

    return this.http.get(environment.endpoint + '/artists/' + artist + '/events', httpOptions);
  }
}
