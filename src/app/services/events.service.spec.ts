import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { EventsService } from './events.service';

describe('EventsService', () => {
  let eventsService: EventsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [EventsService]
    });

    eventsService = TestBed.get(EventsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([EventsService], (service: EventsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable', () => {
    const artist = 'dummyArtist';
    const events = [
      { id: '123' },
      { id: '456' }
    ];

    eventsService.getEvents(artist).subscribe(ev => {
      expect(Object.keys(ev).length).toBe(2);
      expect(ev).toEqual(events);
    });

    const req = httpMock.expectOne(`${environment.endpoint}/artists/${artist}/events?app_id=${environment.app_id}`);
    expect(req.request.method).toBe('GET');
    req.flush(events);
  });
});
