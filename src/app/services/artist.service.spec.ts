import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

import { ArtistService } from './artist.service';

describe('ArtistService', () => {
  let artistService: ArtistService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ArtistService]
    });
    
    artistService = TestBed.get(ArtistService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable', () => {
    const name = "dummyArtist";
    const artistData = { id: '123' };

    artistService.getArtist(name).subscribe(art => {
      expect(art.hasOwnProperty('id')).toEqual(true);
      expect(art).toEqual(artistData);
    });

    const req = httpMock.expectOne(`${environment.endpoint}/artists/${name}?app_id=${environment.app_id}`);
    expect(req.request.method).toBe("GET");
    req.flush(artistData);
  });
});
