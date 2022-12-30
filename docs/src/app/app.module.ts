import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { PintinhoComponent } from './dialogs/pintinho/pintinho.component';
import { HeterocromiaComponent } from './dialogs/heterocromia/heterocromia.component';
import { CinemaRbComponent } from './dialogs/cinema-rb/cinema-rb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './dialogs/principal/principal.component';                  //api


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PintinhoComponent,
    HeterocromiaComponent,
    CinemaRbComponent,
    PrincipalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
