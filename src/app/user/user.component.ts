import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {ActivatedRoute, Router} from '@angular/router';


interface User{
  fname:string,
  lname:string,
  age:string,
  email:string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  dreamgirl='https://firebasestorage.googleapis.com/v0/b/pro-crud.appspot.com/o/p1.png?alt=media&token=0d110407-a394-4f83-8b09-3bd40581d7d0';
  UserCol:AngularFirestoreCollection<User>;
  UserDoc:AngularFirestoreDocument<User>;
  users:any;
  user:Observable<User>;
  private router:Router;
  constructor(private afs: AngularFirestore,  private route:ActivatedRoute,private db:AngularFirestore
    ) { }
  test:any; 
  udata:any;
  ngOnInit() {
  
   this.route.queryParams.subscribe((params)=>{
    this.udata=JSON.parse(atob(params.id));

  
    if(this.udata.data.pic=='https://firebasestorage.googleapis.com/v0/b/pro-crud.appspot.com/o/avtar%2Fg4.png?alt=media&token=033f015a-ed88-4e3e-a4d8-31b541a5f808'){
      this.udata.data.pic=this.dreamgirl;
    }
 
  });
  }


  

}
