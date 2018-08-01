import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventComponent } from '../event/event.component';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EventGridComponent } from './event-grid.component';

describe('EventGridComponent', () => {
  let component: EventGridComponent;
  let fixture: ComponentFixture<EventGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventGridComponent,
        EventComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(EventGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
