import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-dorm',
  templateUrl: './edit-dorm.component.html',
  styleUrls: ['./edit-dorm.component.css']
})
export class EditDormComponent implements OnInit {

  dormsForm:FormGroup;
  DormID: any;

  constructor(
    private form:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    private router:Router
  ) {
    this.DormID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.DormID);

    //Subscribe for obtent instantly the result
    this.crudService.GetDorm(this.DormID).subscribe(
      response=>{
        console.log(response);
        this.dormsForm.setValue({
          name:response[0]['name'],
          location:response[0]['location']
        });
      }
    );
    this.dormsForm=this.form.group(
      {
      name:[''],
      location:['']
      }
    );
  }

  ngOnInit(): void {
  }

  sendData():any{
    console.log(this.dormsForm.value);
    
    this.crudService.EditDorm(this.DormID, this.dormsForm.value).subscribe(
      ()=>{
        this.router.navigateByUrl('/list-dorm');
    });
  }

}
