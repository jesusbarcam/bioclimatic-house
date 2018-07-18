import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingZoneComponent } from './landing-zone.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
/*
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
*/


export const landingZoneRoutes: Routes = [
  {path: '', component: LandingZoneComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent },
      { path: 'aboutus', component: AboutUsComponent },
      {path: 'howwework', component: HowWeWorkComponent }
      // {path: 'gallery', component: GalleryComponent },
      // {path: 'contact', component: ContactComponent }
  ]},
]; // LandingPageRoutes


@NgModule({
  imports: [RouterModule.forChild( landingZoneRoutes )],
  exports: [RouterModule],
  declarations: [LandingZoneComponent]
})

export class LandingPageRoutingModule {
}// LandingPageRoutingModule
