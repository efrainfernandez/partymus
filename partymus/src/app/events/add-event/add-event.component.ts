import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {


  eventsForm:FormGroup;

  constructor(public form:FormBuilder) { 
    this.eventsForm = this.form.group({
      name:[''],
    });
  }

  ngOnInit(): void {
  }

  //function for send the data in the form
  sendData(): any{  //Any info
    console.log("Me presionan");
    console.log(this.eventsForm.value);
  }
}
