import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { EventGridComponent } from '../event-grid/event-grid.component';
import { EventComponent } from '../event/event.component';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ArtistComponent } from './artist.component';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ArtistComponent,
        SearchBarComponent,
        EventGridComponent,
        EventComponent
      ],
      imports: [ 
        FormsModule,
        HttpClientModule,
        MatDatepickerModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatNativeDateModule, 
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
