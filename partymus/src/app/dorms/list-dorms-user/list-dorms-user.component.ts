import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-dorms-user',
  templateUrl: './list-dorms-user.component.html',
  styleUrls: ['./list-dorms-user.component.css']
})
export class ListDormsUserComponent implements OnInit {

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
}
