import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  usersForm:FormGroup;

  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) { 

    this.usersForm = this.form.group({
      name:[''],
      password:[''],
      email:['']
    });
  }

  ngOnInit(): void {
  }

  //function for send the data in the form
  sendData(): any{  //Any info
    console.log(this.usersForm.value);

    //The subscribe is for do the add
    this.crudService.RegisterUser(this.usersForm.value).subscribe(
      response=>{
      //Enviar la URL al user

      //--------------------------CHANGE-----------------------------//
      this.router.navigateByUrl('main');
      //-------------------------------------------------------------//
    });
    
  }
}

