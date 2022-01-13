import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {


  eventsForm:FormGroup;

  constructor(
    public form:FormBuilder,
    private crudService:CrudService
    ) { 

    this.eventsForm = this.form.group({
      name:[''],
    });
  }

  ngOnInit(): void {
  }

  //function for send the data in the form
  sendData(): any{  //Any info
    console.log("Me presionan y este es el valor:");
    console.log(this.eventsForm.value);

    //The subscribe is for do the add
    this.crudService.AddEvent(this.eventsForm.value).subscribe();
  }
}
