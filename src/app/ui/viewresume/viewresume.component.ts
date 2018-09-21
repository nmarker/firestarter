import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Resume } from './resume';

@Component({
  selector: 'viewresume',
  templateUrl: './viewresume.component.html',
  styleUrls: ['./viewresume.component.scss']
})



export class ViewresumeComponent implements OnInit {

  myDoc;
  resumeRef : AngularFireList<Resume>
  resumeObservable: Observable<Resume>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.myDoc = this.afs.doc('contacts/test');
  
    this.resumeObservable = this.myDoc.valueChanges()
    
  }

}
