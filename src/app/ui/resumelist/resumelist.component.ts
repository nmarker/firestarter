import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import * as faker from 'faker';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'resumelist',
  templateUrl: './resumelist.component.html',
  styleUrls: ['./resumelist.component.scss']
})

export class ResumelistComponent implements AfterViewInit {

  //displayedColumns = ['name', 'age', 'email', 'phrase', 'edit'];
  displayedColumns = ['name', 'age', 'phrase'];
  dataSource: MatTableDataSource<any>; 
  todisplayname: string;
  todisplayage: string;
  todisplayphrase: string;

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  countItems = 0;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }

  addOne() {
    const hacker = {
      name: faker.name.findName(),
      age: faker.random.number({ min: 18, max: 99 }),
      email: faker.internet.email(),
      phrase: faker.hacker.phrase(),
      uid: faker.random.alphaNumeric(16)
    }
    this.afs.collection('hackers').doc(hacker.uid).set(hacker)
  }

  ngAfterViewInit() {
     
    this.afs.collection<any>('resume').valueChanges().subscribe(data => {
      console.log(JSON.stringify(data))
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  
    // this.fetchData().subscribe(data => {
    //     console.log(JSON.stringify(data))
        
    //     this.dataSource = new MatTableDataSource(data);
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //   })
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
  }

  fetchData()
  {

    this.itemsCollection = this.afs.collection<any>('resume');
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions =>{
      this.countItems = actions.length;
      return actions.map(action => ({$key: action.payload.doc.id}))
      })
    )
  
  }

  //openDialog(data): void {
  //  const dialogRef = this.dialog.open(EditDialogComponent, {
  //    width: '350px',
  //    data: data
  //  });
  //}

  trackByUid(index, item) {
    return item.uid
  }

  selectRow(row) {
    console.log(row);
    this.todisplayname = row['name'];
    this.todisplayage = row['email'];
    this.todisplayphrase = row['phrase'];
  }

}
