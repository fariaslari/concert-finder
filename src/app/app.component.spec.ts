import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule } from '@angular/material';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EventGridComponent } from './components/event-grid/event-grid.component';
import { EventComponent } from './components/event/event.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
