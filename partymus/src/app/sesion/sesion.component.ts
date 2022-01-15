import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  data:any = {
    name:"Tomas Canton",
    username:"tomascan"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
