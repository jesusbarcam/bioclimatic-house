import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { LandingZoneModuleSettings } from '../../services/settings/landing-zone-module-settings.service';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowWeWorkComponent implements OnInit {


  private _pvcWindowURL: string;
  private _floorHeatingURL: string;
  private _silverblockURL: string;


  /**
   * @method
   * @constructor
   */
  constructor(private changeDetector: ChangeDetectorRef) {
  }// Constructor


  /**
   * @method
   * @lifecycle
   */
  ngOnInit() {
    this.inicialize();
  }// NgOnInit

  /**
   * @method
   * @private
   * @description
   */
  private inicialize() {
    this._floorHeatingURL = LandingZoneModuleSettings.HOW_WE_WORK_FLOOR_HEATING_IMAGE_URL;
    this._pvcWindowURL = LandingZoneModuleSettings.HOW_WE_WORK_WINDOWS_IMAGE_URL;
    this._silverblockURL = LandingZoneModuleSettings.HOW_WE_WORK_SILVERBLOCK_IMAGE_URL;

    this.changeDetector.markForCheck();
  }// Inicialize


  public get pvcWindowURL() {
    return this._pvcWindowURL;
  }// PvcWindowURL
  public get flootHeatingURL() {
    return this._floorHeatingURL;
  }// FloorHeatingURL
  public get silverblockURL() {
    return this._silverblockURL;
  }// SilverblockURL
}// HowWeWorkComponent
