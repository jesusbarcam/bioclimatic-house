import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxGalleryModule } from 'ngx-gallery';

import { LandingPageRoutingModule } from './routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

import { LandingZoneComponent } from './landing-zone.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
// import { LandingZoneModuleSettings } from './services/settings/LandingZoneModuleSettings.service';

/*
import {
  HeaderComponent, FooterComponent, HowWeWorkComponent, GalleryComponent, ContactComponent,
  BannerContactComponent, SplashWallpaperComponent,
} from './components';
*/


@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedComponentsModule
    // NgxGalleryModule
  ], // Imports
  declarations: [
    AboutUsComponent,
    HomeComponent,
    // HeaderComponent,
    // FooterComponent,
    // HowWeWorkComponent,
    // GalleryComponent,
    // ContactComponent,
    // BannerContactComponent,
    // SplashWallpaperComponent
  ], // Declarations
  exports: [
    AboutUsComponent
  ], // Exports
  providers: [
    // LandingZoneModuleSettings
  ]
})
export class LandingZoneModule {
}// LandingZoneModule

