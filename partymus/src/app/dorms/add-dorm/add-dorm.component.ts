import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dorm',
  templateUrl: './add-dorm.component.html',
  styleUrls: ['./add-dorm.component.css']
})
export class AddDormComponent implements OnInit {

  dormsForm:FormGroup;

  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) { 

    this.dormsForm = this.form.group({
      name:[''],
      location:['']
    });
  }

  ngOnInit(): void {
  }

  //function for send the data in the form
  sendData(): any{  //Any info
    console.log(this.dormsForm.value);

    //The subscribe is for do the add
    this.crudService.AddDorm(this.dormsForm.value).subscribe(
      response=>{
      //Enviar la URL al user
      this.router.navigateByUrl('/list-dorm');
    });

    
  }
}

