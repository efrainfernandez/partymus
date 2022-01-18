import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-events-admin',
  templateUrl: './events-admin.component.html',
  styleUrls: ['./events-admin.component.css']
})
export class EventsAdminComponent implements OnInit {

  Events:any;

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.GetEvents().subscribe(response=>{
      console.log(response); 

      this.Events=response;
    });
  }

}
