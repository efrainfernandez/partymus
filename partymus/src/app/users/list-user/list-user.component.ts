import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  Users:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetUsers().subscribe(response=>{
      console.log(response); 

      this.Users=response;
    });
  }

  deleteUser(id:any, iControl:any){
    if(window.confirm("Would you like to delete?")){
      this.crudService.DeleteUser(id).subscribe((response)=>{
        this.Users.splice(iControl,1);
      });
    }
  }

}
