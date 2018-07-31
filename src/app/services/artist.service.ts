import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
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

export class ArtistService {

  constructor(private http:HttpClient) {}

  getArtist(artist: string) : Observable<Object> {
    return this.http.get(environment.endpoint + '/artists/' + artist, httpOptions);
  }

}
