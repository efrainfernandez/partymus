import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './Event';
import { AddEventComponent } from '../events/add-event/add-event.component';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/events/'; //php API 
  constructor(private clientHttp:HttpClient) {}

    //For insert the data
    AddEvent(dataEvent:Event):Observable<any>{
      return this.clientHttp.post(this.API+"?add=1",dataEvent);
    }

    //For Get the Events
    GetEvents(){
      return this.clientHttp.get(this.API);
    }

    //For delete the data
    DeleteEvent(id:any):Observable<any>{
      return this.clientHttp.get(this.API+"?delete="+id);
    }

    //Get an unique event
    GetEvent(id:any):Observable<any>{
      return this.clientHttp.get(this.API+"?consult="+id);
    }

    //Edit event
    EditEvent(id:any, dataEvent:any):Observable<any>{
      return this.clientHttp.post(this.API+"?update="+id,dataEvent);
    }
}
