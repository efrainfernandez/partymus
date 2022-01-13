import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import { ListEventComponent } from './events/list-event/list-event.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'add-event'},
  {path: 'add-event',component:AddEventComponent},
  {path: 'edit-event/:id',component:EditEventComponent},
  {path: 'delete-event/:id',component:DeleteEventComponent},
  {path: 'list-event',component:ListEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
