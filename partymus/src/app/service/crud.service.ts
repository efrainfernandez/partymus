import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './Event';
import { Dorm } from './Dorm';
import { User } from './User';
import { AddEventComponent } from '../events/add-event/add-event.component';
import { AddDormComponent } from '../dorms/add-dorm/add-dorm.component';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API_events: string='http://localhost/partymus/events/'; //php API
  API_dorms:  string='http://localhost/partymus/dorms/'; //php API
  API_users:  string='http://localhost/partymus/users/'; //php API
  
  constructor(private clientHttp:HttpClient) {}

    //For insert the data
    AddEvent(dataEvent:Event):Observable<any>{
      return this.clientHttp.post(this.API_events+"?add=1",dataEvent);
    }
    AddDorm(dataDorm:Dorm):Observable<any>{
      return this.clientHttp.post(this.API_dorms+"?add=1",dataDorm);
    }
    RegisterUser(dataUser:User):Observable<any>{
      return this.clientHttp.post(this.API_users+"?add=1",dataUser);
    }

    //For Get the data in a list
    GetEvents(){
      return this.clientHttp.get(this.API_events);
    }
    GetDorms(){
      return this.clientHttp.get(this.API_dorms);
    }
    GetUsers(){
      return this.clientHttp.get(this.API_users);
    }

    //For delete the data
    DeleteEvent(id:any):Observable<any>{
      return this.clientHttp.get(this.API_events+"?delete="+id);
    }
    DeleteDorm(id:any):Observable<any>{
      return this.clientHttp.get(this.API_dorms+"?delete="+id);
    }
    DeleteUser(id:any):Observable<any>{
      return this.clientHttp.get(this.API_users+"?delete="+id);
    }

    //Get an unique data
    GetEvent(id:any):Observable<any>{
      return this.clientHttp.get(this.API_events+"?consult="+id);
    }
    GetDorm(id:any):Observable<any>{
      return this.clientHttp.get(this.API_dorms+"?consult="+id);
    }
    GetUser(id:any):Observable<any>{
      return this.clientHttp.get(this.API_users+"?consult="+id);
    }

    //Edit data
    EditEvent(id:any, dataEvent:any):Observable<any>{
      return this.clientHttp.post(this.API_events+"?update="+id,dataEvent);
    }
    EditDorm(id:any, dataDorm:any):Observable<any>{
      return this.clientHttp.post(this.API_dorms+"?update="+id,dataDorm);
    }
    EditUser(id:any, dataUser:any):Observable<any>{
      return this.clientHttp.post(this.API_users+"?update="+id,dataUser);
    }
}
