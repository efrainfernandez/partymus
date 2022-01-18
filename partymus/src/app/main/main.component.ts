import { Component, OnInit } from '@angular/core';

import { User } from '../user';



@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }


  /*
  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }*/
  
}
