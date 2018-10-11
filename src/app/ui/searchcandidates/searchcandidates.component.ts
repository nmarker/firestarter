import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import * as faker from 'faker';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'searchcandidates',
  templateUrl: './searchcandidates.component.html',
  styleUrls: ['./searchcandidates.component.scss']
})
export class SearchcandidatesComponent implements AfterViewInit {
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
  ngAfterViewInit() {
     
    this.afs.collection<any>('resume').valueChanges().subscribe(data => {
      console.log(JSON.stringify(data))
      
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
