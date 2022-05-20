import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { AuthButtonComponent } from './auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateRefugeeComponent } from './create-refugee/create-refugee.component';
import { HomeComponent } from './home/home.component';
import { CreateVolunteerComponent } from './create-volunteer/create-volunteer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationsComponent,
    AuthButtonComponent,
    UserProfileComponent,
    CreateRefugeeComponent,
    HomeComponent,
    CreateVolunteerComponent,
    CreateAccommodationComponent,
  ],
  imports: [
    BrowserModule,

    AuthModule.forRoot({
      domain: 'dev-0nefvcxc.us.auth0.com',
      clientId: 'IPFsAUHd3sjH5A0zmUXDXIhdHgs2oKEo'
    }),

    AppRoutingModule, RouterModule, HttpClientModule,
    MatIconModule, MatToolbarModule, MatButtonModule, BrowserAnimationsModule, MatSidenavModule, MatMenuModule, MatListModule, MatFormFieldModule,
    MatInputModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
