import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './Event';
import { AddEventComponent } from '../events/add-event/add-event.component';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/events/';
  constructor(private clientHttp:HttpClient) {}

    //For insert the data
    AddEvent(dataEvent:Event):Observable<any>{
      return this.clientHttp.post(this.API+"?add=1",dataEvent);
    }

}
