import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import { ListEventComponent } from './events/list-event/list-event.component';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SesionComponent } from './sesion/sesion.component';


const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'login'},
  {path: 'add-event',component:AddEventComponent},
  {path: 'edit-event/:id',component:EditEventComponent},
  {path: 'delete-event/:id',component:DeleteEventComponent},
  {path: 'list-event',component:ListEventComponent},
  {path: 'login',component:LoginComponent},
  {path: 'user',component:UserComponent},
  {path: 'sesion',component:SesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
