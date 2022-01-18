import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-events-user',
  templateUrl: './list-events-user.component.html',
  styleUrls: ['./list-events-user.component.css']
})
export class ListEventsUserComponent implements OnInit {

  Events:any;

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.GetEvents().subscribe(response=>{
      console.log(response); 

      this.Events=response;
    });
  }
}
