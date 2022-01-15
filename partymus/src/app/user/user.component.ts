import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  year:number;

  constructor() {
    this.year = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
