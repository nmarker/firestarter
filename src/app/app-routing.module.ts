import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';

import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';
import { PostjobComponent } from './ui/postjob/postjob.component';
import { AddresumeComponent } from './ui/addresume/addresume.component';
import { ViewresumeComponent } from './ui/viewresume/viewresume.component';
import { ResumelistComponent } from './ui/resumelist/resumelist.component';
import { AdListingComponent } from './ui/ad-listing/ad-listing.component';
import { ProfileComponent } from './ui/profile/profile.component';
import { ProfileresumeComponent } from './ui/profileresume/profileresume.component';
import { WelcomeComponent } from './ui/onboarding/welcome/welcome.component';
import { LocationComponent } from './ui/onboarding/location/location.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },
  { path: 'postjob', component: PostjobComponent},
  { path: 'addresume', component: AddresumeComponent },
  { path: 'viewresume', component: ViewresumeComponent },
  { path: 'resumelist', component: ResumelistComponent },
  { path: 'adlisting', component: AdListingComponent },
  { path: 'ssr', component: SsrPageComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'profileresume', component: ProfileresumeComponent},
  { path: 'onboarding/welcome', component:WelcomeComponent},
  { path: 'onboarding/location', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
