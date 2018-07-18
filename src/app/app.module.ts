import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, RootRenderer } from '@angular/core';

import { AppComponent } from './app.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';
import { PrivateZoneModule } from './modules/private-zone/private-zone.module';
import { LandingZoneModule } from './modules/landing-zone/landing-zone.module';
import { RoutingModule } from './routing.module';



@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    CommonModule,
    PrivateZoneModule,
    LandingZoneModule
  ],
  declarations: [
    AppComponent,
    UnknowPageComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }// AppModule
