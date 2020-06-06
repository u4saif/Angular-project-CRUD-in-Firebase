import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';

import { User } from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';

interface Users{
  fname:string,
  lname:string,
  email:string,
  age:string
}

interface UserId extends Users{
  id:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UserCol:AngularFirestoreCollection<Users>;
  users:any;

  UserDoc:AngularFirestoreDocument<User>;
  user:Observable<User>;


  constructor(private afs: AngularFirestore ,
    private router:Router,
    private route:ActivatedRoute){}

  ngOnInit(){
    this.UserCol=this.afs.collection('users');
    //this.users=this.UserCol.valueChanges();
    this.users=this.UserCol.snapshotChanges()
    .map(actions=> {
      return actions.map(a => {
        const data = a.payload.doc.data() as Users;
        const id = a.payload.doc.id;
        //console.log(id,data);
        return { id, data };
      })
    })
  }

  getId(UserId){
    this.UserDoc=this.afs.doc('users/'+UserId); 
    this.user=this.UserDoc.valueChanges();

    this.router.navigate(['./user-details'],{queryParams:{id:btoa(JSON.stringify(UserId))}
     });
    
  }

  editId(u){
    this.router.navigate(['./edit'],{queryParams:{data:btoa(JSON.stringify(u))}
  });
  }
  delete(u){
    console.log('Delte start');
    this.afs.doc('users/'+u.id).delete();
    console.log('Delte end');
  }

}
