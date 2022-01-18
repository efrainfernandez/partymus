import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  usersForm:FormGroup;
  UserID: any;

  constructor(
    private form:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    private router:Router
  ) {
    this.UserID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.UserID);

    //Subscribe for obtent instantly the result
    this.crudService.GetUser(this.UserID).subscribe(
      response=>{
        console.log(response);
        this.usersForm.setValue({
          name:response[0]['name'],
          password:response[0]['password'],
          email:response[0]['email']
        });
      }
    );
    this.usersForm=this.form.group(
      {
      name:[''],
      password:[''],
      email:['']
      }
    );
  }

  ngOnInit(): void {
  }

  sendData():any{
    console.log(this.usersForm.value);
    
    this.crudService.EditUser(this.UserID, this.usersForm.value).subscribe(
      ()=>{
        this.router.navigateByUrl('/list-user');
    });
  }

}
