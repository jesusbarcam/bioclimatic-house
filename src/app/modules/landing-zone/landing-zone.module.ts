import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxGalleryModule } from 'ngx-gallery';

import { LandingPageRoutingModule } from './routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

import { LandingZoneComponent } from './landing-zone.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

/*
import {
  HeaderComponent, FooterComponent, SplashWallpaperComponent,
} from './components';
*/


@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    LandingPageRoutingModule
    // NgxGalleryModule
  ], // Imports
  declarations: [
    LandingZoneComponent,
    AboutUsComponent,
    HomeComponent,
    HowWeWorkComponent,
    GalleryComponent,
    ContactComponent
    // HeaderComponent,
    // FooterComponent,
    // SplashWallpaperComponent
  ], // Declarations
  exports: [
    LandingZoneComponent
  ], // Exports
  providers: [
  ]
})
export class LandingZoneModule {
}// LandingZoneModule

