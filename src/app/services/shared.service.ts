import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public bSubject = new BehaviorSubject<string>('No Data');
  constructor() { }

  updateBS(data: string) {
    this.bSubject.next(data);
  }
}
