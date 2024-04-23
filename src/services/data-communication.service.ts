import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  constructor() { }
  // public currentUserSubject = new Subject<string>();
  // public currentUserObservable = this.currentUserSubject.asObservable();

  public currentUserSubject = new BehaviorSubject<string>("");
  public currentRoleSubject = new BehaviorSubject<string>("");
}
