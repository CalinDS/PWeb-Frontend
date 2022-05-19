import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { CreateRefugeeComponent } from './create-refugee/create-refugee.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'accommodations', component: AccommodationsComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', component: HomeComponent },
  { path: 'create-refugee', component: CreateRefugeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
