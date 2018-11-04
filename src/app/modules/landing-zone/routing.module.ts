import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingZoneComponent } from './landing-zone.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';



export const landingZoneRoutes: Routes = [
  {path: '', component: LandingZoneComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {path: 'home', component: HomeComponent, data: {title: 'BROWSER_TITLES.HOME'} },
      { path: 'aboutus', component: AboutUsComponent, data: {title: 'BROWSER_TITLES.ABOUT_US'} },
      {path: 'howwework', component: HowWeWorkComponent, data: {title: 'BROWSER_TITLES.HOW_WE_WORK'} },
      {path: 'gallery', component: GalleryComponent, data: {title: 'BROWSER_TITLES.GALLERY'} },
      {path: 'contact', component: ContactComponent, data: {title: 'BROWSER_TITLES.CONTACT'} },
      {path: 'access', pathMatch: 'full', redirectTo: '/private/access'} // Redirect to private module routes
  ]},
]; // LandingPageRoutes


@NgModule({
  imports: [RouterModule.forChild( landingZoneRoutes )],
  exports: [RouterModule]
})

export class LandingPageRoutingModule {
}// LandingPageRoutingModule
