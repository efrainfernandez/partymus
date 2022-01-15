import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-dorm',
  templateUrl: './list-dorm.component.html',
  styleUrls: ['./list-dorm.component.css']
})
export class ListDormComponent implements OnInit {

  Dorms:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetDorms().subscribe(response=>{
      console.log(response); 

      this.Dorms=response;
    });
  }

  deleteDorm(id:any, iControl:any){
    if(window.confirm("Would you like to delete?")){
      this.crudService.DeleteDorm(id).subscribe((response)=>{
        this.Dorms.splice(iControl,1);
      });
    }
  }

}