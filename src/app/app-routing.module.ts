import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';

import {HomeComponent} from './home/home.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
const routes: Routes = [
  {path:"" , component: HomeComponent},
  {path:"useradd" , component: AddUserComponent},
  {path:"user-details" , component: UserComponent},
  {path:"edit" , component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
