import { Component, OnInit } from '@angular/core';
import { User } from '../user';

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

  
}
