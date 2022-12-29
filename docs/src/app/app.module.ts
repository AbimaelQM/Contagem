import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { PintinhoComponent } from './dialogs/pintinho/pintinho.component';
import { HeterocromiaComponent } from './dialogs/heterocromia/heterocromia.component';
import { CinemaRbComponent } from './dialogs/cinema-rb/cinema-rb.component';                  //api


// "node_modules/bootstrap/dist/css/bootstrap.min.css",

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PintinhoComponent,
    HeterocromiaComponent,
    CinemaRbComponent,
  ],
  imports: [
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    DialogModule,
    SelectButtonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
