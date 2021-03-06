import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { ListEventComponent } from './events/list-event/list-event.component';


import { AddDormComponent } from './dorms/add-dorm/add-dorm.component';
import { EditDormComponent } from './dorms/edit-dorm/edit-dorm.component';
import { ListDormComponent } from './dorms/list-dorm/list-dorm.component';


import { LoginComponent } from './login/login.component';
import { SesionComponent } from './sesion/sesion.component';

import { RegisterUserComponent } from './users/register-user/register-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';

import { MainComponent } from './main/main.component';
import { MainButtonsComponent } from './main-buttons/main-buttons.component';

import { EventsAdminComponent } from './events/events-admin/events-admin.component';

import { ListEventsUserComponent } from './events/list-events-user/list-events-user.component';
import { ListDormsUserComponent } from './dorms/list-dorms-user/list-dorms-user.component';

import { DevelopmentComponent } from './development/development.component';


const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'main'},

  {path: 'main', component: MainComponent},
  {path: 'main-buttons', component: MainButtonsComponent},

  {path: 'add-event',component:AddEventComponent},
  {path: 'edit-event/:id',component:EditEventComponent},
  {path: 'list-event',component:ListEventComponent},

  {path: 'add-dorm',component:AddDormComponent},
  {path: 'edit-dorm/:id',component:EditDormComponent},
  {path: 'list-dorm',component:ListDormComponent},
    
  {path: 'login',component:LoginComponent},
  {path: 'sesion',component:SesionComponent},

  {path: 'register-user',component: RegisterUserComponent},
  {path: 'edit-user/:id',component: EditUserComponent},
  {path: 'list-user',component: ListUserComponent},
  {path: 'events-admin',component: EventsAdminComponent},
  
  {path: 'list-events-user',component:  ListEventsUserComponent},
  {path: 'list-dorms-user',component:  ListDormsUserComponent},

  {path: 'development',component: DevelopmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
