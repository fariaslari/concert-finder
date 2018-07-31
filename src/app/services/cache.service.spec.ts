import { TestBed, inject } from '@angular/core/testing';

import { CacheService } from './cache.service';

describe('CacheService', () => {
  let cacheService: CacheService;

  beforeEach(() => {
    let store = {};
    const mockSessionStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    }

    spyOn(sessionStorage, 'getItem')
      .and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem')
      .and.callFake(mockSessionStorage.setItem);
    spyOn(sessionStorage, 'removeItem')
      .and.callFake(mockSessionStorage.removeItem);
    spyOn(sessionStorage, 'clear')
      .and.callFake(mockSessionStorage.clear);

    TestBed.configureTestingModule({
      providers: [CacheService]
    });

    cacheService = TestBed.get(CacheService);
  });

  it('should be created', inject([CacheService], (service: CacheService) => {
    expect(service).toBeTruthy();
  }));

  it('should set the cache', () => {
    cacheService.set('key', 'data');
    expect(sessionStorage.getItem('key')).toEqual('data');
  });

  it('should get the cache', () => {
    sessionStorage.setItem('key2', 'data2');
    expect(cacheService.get('key2')).toEqual('data2');
  });

  it('should remove key from cache', () => {
    sessionStorage.setItem('key3', 'data3');
    cacheService.remove('key3');

    expect(sessionStorage.getItem('key3')).toEqual(null);
  });

  it('should remove all keys from cache', () => {
    sessionStorage.setItem('key4', 'data4');
    sessionStorage.setItem('key5', 'data5');
    cacheService.clean();

    expect(sessionStorage.getItem('key4')).toEqual(null);
    expect(sessionStorage.getItem('key5')).toEqual(null);
  });
});
