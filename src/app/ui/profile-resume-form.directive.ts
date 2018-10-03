import { Directive, Input, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tap, map, take, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {
  MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';


@Directive({
  selector: '[profileResumeForm]'
})
export class ProfileResumeFormDirective implements OnInit, OnDestroy {

  // Inputs
  @Input() path: string;
  @Input() formGroup: FormGroup;

  // Internal state
  private _state: 'loading' | 'synced' | 'modified' | 'error';

  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // Outputs
  @Output() stateChange = new EventEmitter<string>();
  @Output() formError = new EventEmitter<string>();

  // Firestore Document
  private docRef: AngularFirestoreDocument;

  // Subscriptions
  private formSub: Subscription;

  constructor(private fb: FormBuilder, private afs: AngularFirestore,
    public snackBar: MatSnackBar, public dialog: MatDialog) { }


  ngOnInit() {
    this.docRef = this.getDocRef(this.path);
    this.autoSave();
  }

  
  // Autosaves form changes
  autoSave() {
    this.formSub = this.formGroup.valueChanges
    .pipe(
      tap(change => {
        this.state = 'modified';
      }),
      debounceTime(2000),
      tap(change => {
        if (this.formGroup.valid && this._state === 'modified') {
          this.setDoc();
        }
      })
    )
    .subscribe();
  }

  // Intercept form submissions to perform the document write
  @HostListener('ngSubmit', ['$event'])
  onSubmit(e) {
    this.setDoc();
  }


  // Determines if path is a collection or document
  getDocRef(path: string): any {
    if (path.split('/').length % 2) {
      return this.afs.doc(`${path}/${this.afs.createId()}`);
    } else {
      return this.afs.doc(path);
    }
  }

  openSnackBar(message: string, action: string) {

    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    //this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);
    this.snackBar.open(message,'',config)
  }

  // Writes changes to Firestore
  async setDoc() {
    try {
      await this.docRef.set(this.formGroup.value, { merge: true });
      this.state = 'synced';
      this.openSnackBar('Auto saved.','Succes')
    } catch (err) {
      console.log(err)
      this.formError.emit(err.message)
      this.state = 'error';
    }
  }
  
  // Setter for state changes
  set state(val) {
    this._state = val;
    this.stateChange.emit(val);
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }


}
