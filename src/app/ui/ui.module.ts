import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SsrPageComponent } from './ssr-page/ssr-page.component';
import { PostjobComponent } from './postjob/postjob.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule, MatDatepicker,
  MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule, MatExpansionModule,
  MatCardModule, MatTabsModule, MatIconModule, MatPaginatorModule, MatFormFieldModule, MatRadioModule, MatIcon, MatListOption,
 MatSortModule, MatTableModule, MatGridListModule, MatInput, MatSelectModule, MatDialog, MatDatepickerModule, MatListModule } from '@angular/material';
import { FireFormDirective } from './fire-form.directive';
import { ProfileResumeFormDirective } from './profile-resume-form.directive';
import { AddresumeComponent } from './addresume/addresume.component';
import { ViewresumeComponent } from './viewresume/viewresume.component';
import { ResumelistComponent } from './resumelist/resumelist.component';
import { AdListingComponent } from './ad-listing/ad-listing.component';
import { ProfileComponent } from './profile/profile.component';
import { DialogOverviewExampleDialog} from './profile/profile.component';
import { DialogContentExampleDialog } from './profileresume/profileresume.component';
import { ProfileresumeComponent } from './profileresume/profileresume.component';


@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, 
    MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDialogModule, 
    MatSidenavModule, MatNativeDateModule,MatExpansionModule,
    MatCardModule, MatTabsModule, MatRadioModule,
    MatIconModule, MatFormFieldModule, MatDatepickerModule,
    MatTableModule, MatPaginatorModule, MatSortModule, 
    MatPaginatorModule, MatGridListModule, MatSelectModule, MatListModule,
    MatTabsModule, MatIconModule],
  declarations: [
    UserLoginComponent,
    HomePageComponent,
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent,
    SsrPageComponent,
    PostjobComponent,
    FireFormDirective,
    ProfileResumeFormDirective,
    AddresumeComponent,
    ViewresumeComponent,
    ResumelistComponent,
    AdListingComponent,
    ProfileComponent,
    DialogOverviewExampleDialog,
    DialogContentExampleDialog,
    ProfileresumeComponent
  ],
  exports: [
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent
  ],
  entryComponents: [ DialogOverviewExampleDialog, DialogContentExampleDialog],
  providers: []
})
export class UiModule {}
