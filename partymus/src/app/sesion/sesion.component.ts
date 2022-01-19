import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  Users:any;
  token: any;

  constructor( private crudService:CrudService, private api:ApiService) { }


  ngOnInit(): void {
    this.crudService.GetUsers().subscribe(response=>{
      console.log(response); 

      this.Users=response;
    });

    this.token = this.api.getToken();
  }

}
