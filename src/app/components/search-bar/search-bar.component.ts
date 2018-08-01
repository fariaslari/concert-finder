import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CacheService } from '../../services/cache.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  artistName: string;
  isSubmited: boolean;
  @Output() change = new EventEmitter<any>();

  constructor(private cache: CacheService) { }

  ngOnInit() {
    const inputCache = this.cache.get('inputSearch');
    if (inputCache) {
      this.artistName = inputCache.toString();
      this.isSubmited = true;
      this.change.emit(this.artistName);
    } else {
      this.isSubmited = false;
    }
  }

  submit() {
    this.cache.clean();
    this.cache.set('inputSearch', this.artistName);
    this.filterChanged();
  }

  filterChanged() {
      this.isSubmited = true;
      this.change.emit(this.artistName);
  }

}
