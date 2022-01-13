import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import { ListEventComponent } from './events/list-event/list-event.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddEventComponent,
    EditEventComponent,
    DeleteEventComponent,
    ListEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
