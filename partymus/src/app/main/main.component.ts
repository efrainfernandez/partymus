import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';


@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //hero = 'prueba';
  test: User = {
    id:1 ,
    name: 'testUser'
  };
  constructor() { }

  ngOnInit(): void {
  }

  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  users = USERS;
  
}
