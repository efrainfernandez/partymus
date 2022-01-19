import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  Users:any;

  constructor( private crudService:CrudService) { }


  ngOnInit(): void {
    this.crudService.GetUsers().subscribe(response=>{
      console.log(response); 

      this.Users=response;
    });
  }

}
