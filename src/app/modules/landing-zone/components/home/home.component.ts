import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { LandingZoneModuleSettings } from '../../services/settings/landing-zone-module-settings.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  private _designHomeImageURL;


  constructor() {
  }// Constructor



  ngOnInit() {
    this._designHomeImageURL = LandingZoneModuleSettings.HOME_1_SECTION_URL;
  }// NgOnInit


  public get designHomeImageURL() {
    return this._designHomeImageURL;
  }// DesignHomeImageURL

}// HomeComponent
