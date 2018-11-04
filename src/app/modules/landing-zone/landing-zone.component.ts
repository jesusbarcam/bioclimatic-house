import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { LandingZoneModuleSettings } from './services/settings/landing-zone-module-settings.service';


@Component({
  selector: 'landing-zone',
  templateUrl: './landing-zone.component.html',
  styleUrls: ['./landing-zone.component.scss']
})// Component


/**
 * @class
 * @implements OnInit
 * @description
 */
export class LandingZoneComponent implements OnInit {

  public splashImageUrl: string;
  public slogan: string;



  constructor(private router: Router) {
  }// Constructor



  /**
   * @implements
   * @method
   */
  ngOnInit() {
    this.initListenerRouter();
    this.initialize();
  }// ngOnInit




   /**
   * @private
   * @method
   * @description
   */
  private initialize(): void {
    this.whenRouteChange( this.router.url );
  }// initialize



  /**
   * @private
   * @method
   * @description
   */
  private initListenerRouter() {
    this.router.events.subscribe(( event: any ) => {
      if ( event instanceof NavigationEnd ) {
        this.whenRouteChange( event.url );
        window.scrollTo(0, 0);
      }// If
    });
  }// InitListenerRouter



  /**
   * @private
   * @method
   * @description
   */
  private whenRouteChange(currentURL: any) {
    if ( currentURL ) {
      const endPointRoute: string[] = currentURL.split('/');
      const currentRoute: string = endPointRoute[ (endPointRoute.length - 1) ];
      this.splashImageUrl = this.getWallpaperImageDependingOfRoute( currentRoute );
      this.slogan = this.getSloganDependingOfRoute( currentRoute );
    }// If
  }// GetSplashDependingOfRoute




  /**
   * @private
   * @method
   * @param currentRoute
   * @description
   */
  private getWallpaperImageDependingOfRoute(currentRoute: string) {
    switch ( currentRoute ) {
      case 'aboutus': return LandingZoneModuleSettings.ABOUT_US_WALLPAPER_URL;
      case 'howwework': return LandingZoneModuleSettings.HOW_WE_WORK_WALLPAPER_URL;
      case 'gallery': return LandingZoneModuleSettings.GALLERY_WALLPAPER_URL;
      case 'contact': return LandingZoneModuleSettings.CONTACT_WALLPAPER_URL;
      default: return LandingZoneModuleSettings.HOME_WALLPAPER_URL;
    }// Switch
  }// GetWallpaperImageDependingOfRoute




  /**
   * @method
   * @private
   * @param currentRoute
   * @description
   */
  private getSloganDependingOfRoute(currentRoute: string) {
    switch ( currentRoute ) {
      case 'aboutus': return 'COMMON_APPLICATION.SLOGAN_ABOUT_US';
      case 'howwework': return 'COMMON_APPLICATION.SLOGAN_HOW_WE_WORK';
      case 'gallery': return 'COMMON_APPLICATION.SLOGAN_GALLERY';
      case 'contact': return 'COMMON_APPLICATION.SLOGAN_CONTACT';
      default: return 'COMMON_APPLICATION.SLOGAN_HOME';
    }// Switch
  }// GetSloganDependingOfRoute

}// LandingZoneComponent
