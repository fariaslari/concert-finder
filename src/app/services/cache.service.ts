import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }


  set(key: string, data: any, isObject: boolean = false) {
    sessionStorage.setItem(key, (isObject ? JSON.stringify(data) : data));
  }

  get(key: string, isObject: boolean = false): any {
    const data = sessionStorage.getItem(key);
    if (isObject) {
      return JSON.parse(data);
    }
    return data;
  }

  remove (key: string) {
    sessionStorage.removeItem(key);
  }

  clean() {
    sessionStorage.clear();
  }
}
