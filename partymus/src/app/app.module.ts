import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import { ListEventComponent } from './events/list-event/list-event.component';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SesionComponent } from './sesion/sesion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AddDormComponent } from './dorms/add-dorm/add-dorm.component';
import { EditDormComponent } from './dorms/edit-dorm/edit-dorm.component';
import { ListDormComponent } from './dorms/list-dorm/list-dorm.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddEventComponent,
    EditEventComponent,
    DeleteEventComponent,
    ListEventComponent,
    LoginComponent,
    UserComponent,
    SesionComponent,
    AddDormComponent,
    EditDormComponent,
    ListDormComponent,
    RegisterUserComponent,
    ListUserComponent,
    EditUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
