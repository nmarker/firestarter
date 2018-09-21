import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import * as faker from 'faker';

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
    // var i:number; 
    // for(i =1;i<=100;i++) {
    //   this.addOne();  
    // }
     
    this.afs.collection<any>('hackers').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
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
    this.todisplayage = row['age'];
    this.todisplayphrase = row['phrase'];
  }

}
