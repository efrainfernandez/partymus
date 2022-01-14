import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  Events:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetEvents().subscribe(response=>{
      console.log(response); 

      this.Events=response;
    });
  }

  deleteEvent(id:any, iControl:any){
    if(window.confirm("Would you like to delete?")){
      this.crudService.DeleteEvent(id).subscribe((response)=>{
        this.Events.splice(iControl,1);
      });
    }
  }


}
