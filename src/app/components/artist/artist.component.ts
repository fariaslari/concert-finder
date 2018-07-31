import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { EventGridComponent } from '../event-grid/event-grid.component';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../models/artist.model';
import { isString } from 'util';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistData: Artist = null;
  filterData: any = {};
  isSubmited: boolean;
  loading: boolean;
  @Output() updateEventGrid = new EventEmitter<any>();

  constructor(private ArtistService: ArtistService, private cache: CacheService) { }

  ngOnInit() {
    this.isSubmited = false;
  }

  filterChanged(artistName: string){
    
    if(isString(artistName)){
      let cacheData = this.cache.get("artist_" + artistName, true);
      this.filterData = artistName;
      if(cacheData){
        this.artistData = cacheData;
      }else{
        this.fetchData();
      }
      this.isSubmited = true;
    }
  }

  private fetchData(){
    this.artistData = null;
    this.loading = true;
    this.ArtistService.getArtist(this.filterData)
        .subscribe(res => {
            if (res.hasOwnProperty('id')) {
                this.artistData = this.formatData(res);
                this.cache.set("artist_" + this.filterData, this.artistData, true);
                this.loading = false;
            }else{
              this.artistData = null;
              this.loading = false;
            }
        },(err) => {
          this.artistData = null;
          this.loading = false;
      });
  }

  private formatData(res: any) : Artist{
    return new Artist(res.name, res.image_url, (res.facebook_page_url != "" ? res.facebook_page_url : null));
  }

}
