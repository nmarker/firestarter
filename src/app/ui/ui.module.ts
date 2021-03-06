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
  MatSortModule, MatTableModule, MatGridListModule, MatInput, MatSelectModule, MatDialog, MatDatepickerModule, MatListModule,
  MatTooltipModule, MatStepperModule } from '@angular/material';
import { FireFormDirective } from './fire-form.directive';
import { ProfileResumeFormDirective } from './profile-resume-form.directive';
import { AddresumeComponent } from './addresume/addresume.component';
import { ViewresumeComponent } from './viewresume/viewresume.component';
import { ResumelistComponent } from './resumelist/resumelist.component';
import { AdListingComponent } from './ad-listing/ad-listing.component';
import { ProfileComponent } from './profile/profile.component';
import { DialogOverviewExampleDialog} from './profile/profile.component';
import { DialogContentExampleDialog } from './profileresume/profileresume.component';
import { DeleteDialog } from './addresume/addresume.component';
import { ProfileresumeComponent } from './profileresume/profileresume.component';
import { LocationComponent } from './onboarding/location/location.component';
import { WelcomeComponent } from './onboarding/welcome/welcome.component';
import { LookingComponent } from './onboarding/looking/looking.component';
import { PreferencesComponent } from './onboarding/preferences/preferences.component';
import { PreviewComponent } from './onboarding/preview/preview.component';
import { GooglePlacesDirective } from './google-places.directive';
import { SearchcandidatesComponent } from './searchcandidates/searchcandidates.component';
import { OnboardingprofileComponent } from './onboarding/onboardingprofile/onboardingprofile.component';
import { BuilderComponent } from './onboarding/builder/builder.component';
//import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
//import 'rxjs/Rx';

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
    MatTabsModule, MatIconModule, MatTooltipModule, MatStepperModule
    //Ng4GeoautocompleteModule.forRoot()
  ],
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
    DeleteDialog,
    ProfileresumeComponent,
    LocationComponent,
    WelcomeComponent,
    LookingComponent,
    PreferencesComponent,
    PreviewComponent,
    GooglePlacesDirective,
    SearchcandidatesComponent,
    OnboardingprofileComponent,
    BuilderComponent
  ],
  exports: [
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent
  ],
  entryComponents: [ DialogOverviewExampleDialog, DialogContentExampleDialog, DeleteDialog],
  providers: []
})
export class UiModule {}
