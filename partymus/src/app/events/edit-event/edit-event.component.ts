import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventsForm:FormGroup;
  EventID: any;

  constructor(
    private form:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    private router:Router
  ) {
    this.EventID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.EventID);

    //Subscribe for obtent instantly the result
    this.crudService.GetEvent(this.EventID).subscribe(
      response=>{
        console.log(response);
        this.eventsForm.setValue({
          name:response[0]['name']
        });
      }
    );
    this.eventsForm=this.form.group(
      {
      name:['']
      }
    );
  }

  ngOnInit(): void {
  }

  sendData():any{
    console.log(this.eventsForm.value);
    
    this.crudService.EditEvent(this.EventID, this.eventsForm.value).subscribe(
      ()=>{
        this.router.navigateByUrl('/list-event');
    });
  }

}
