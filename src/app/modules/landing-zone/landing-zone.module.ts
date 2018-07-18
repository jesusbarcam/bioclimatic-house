import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxGalleryModule } from 'ngx-gallery';

import { LandingPageRoutingModule } from './routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

import { LandingZoneComponent } from './landing-zone.component';
// import { LandingZoneModuleSettings } from './services/settings/LandingZoneModuleSettings.service';

/*
import {
  HeaderComponent, FooterComponent, HowWeWorkComponent, GalleryComponent, ContactComponent,
  HomeComponent, BannerContactComponent, SplashWallpaperComponent, AboutUsComponent
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
    // AboutUsComponent,
    // HeaderComponent,
    // FooterComponent,
    // HowWeWorkComponent,
    // GalleryComponent,
    // ContactComponent,
    // HomeComponent,
    // BannerContactComponent,
    // SplashWallpaperComponent
  ], // Declarations
  exports: [
  ], // Exports
  providers: [
    // LandingZoneModuleSettings
  ]
})
export class LandingZoneModule {
}// LandingZoneModule

