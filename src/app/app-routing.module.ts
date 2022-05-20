import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { CreateRefugeeComponent } from './create-refugee/create-refugee.component';
import { CreateVolunteerComponent } from './create-volunteer/create-volunteer.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'accommodations', component: AccommodationsComponent },
  { path: 'create-refugee', component: CreateRefugeeComponent },
  { path: 'create-volunteer', component: CreateVolunteerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
