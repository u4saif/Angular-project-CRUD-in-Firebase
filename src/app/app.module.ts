import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore'
import {environment} from 'src/environments/environment';

import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomeComponent,
    UserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
