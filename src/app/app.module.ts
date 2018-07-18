import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PrivateZoneModule } from './modules/private-zone/private-zone.module';
import { LandingZoneModule } from './modules/landing-zone/landing-zone.module';
import { RoutingModule } from './routing.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    CommonModule,
    PrivateZoneModule,
    LandingZoneModule
  ],
  declarations: [
    AppComponent,
    UnknowPageComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }// AppModule
