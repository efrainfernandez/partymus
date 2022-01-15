import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import { ListEventComponent } from './events/list-event/list-event.component';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SesionComponent } from './sesion/sesion.component';
import { AddDormComponent } from './dorms/add-dorm/add-dorm.component';
import { EditDormComponent } from './dorms/edit-dorm/edit-dorm.component';
import { ListDormComponent } from './dorms/list-dorm/list-dorm.component';

import { RegisterUserComponent } from './users/register-user/register-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';

import { MainComponent } from './main/main.component';
import { MainButtonsComponent } from './main-buttons/main-buttons.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'main'},

  {path: 'main', component: MainComponent},
  {path: 'main-buttons', component: MainButtonsComponent},

  {path: 'add-event',component:AddEventComponent},
  {path: 'edit-event/:id',component:EditEventComponent},
  {path: 'delete-event/:id',component:DeleteEventComponent},
  {path: 'list-event',component:ListEventComponent},
    
  {path: 'login',component:LoginComponent},
  {path: 'user',component:UserComponent},
  {path: 'sesion',component:SesionComponent},

  {path: 'add-dorm',component:AddDormComponent},
  {path: 'edit-dorm/:id',component:EditDormComponent},
  {path: 'list-dorm',component:ListDormComponent},

  {path: 'register-user',component: RegisterUserComponent},
  {path: 'edit-user/:id',component: EditUserComponent},
  {path: 'list-user',component: ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
