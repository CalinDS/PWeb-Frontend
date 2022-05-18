import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    AccommodationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule,
    MatIconModule, MatToolbarModule, MatButtonModule, BrowserAnimationsModule, MatSidenavModule, MatMenuModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
