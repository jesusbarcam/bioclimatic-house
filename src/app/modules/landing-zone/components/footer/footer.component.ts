import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ApplicationSettingsService } from '../../../../services/application-settings.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent implements OnInit {

  public currentYear: number;
  public currentVersion: string;
  public biohLogoUrl: string;


  constructor() {
  }// constructor


  ngOnInit() {
    this.inicialize();
  }// ngOnInit


  /**
   * @private
   * @method
   * @description
   */
  private inicialize() {
    this.currentYear = new Date().getFullYear();
    this.biohLogoUrl = ApplicationSettingsService.BIOH_LOGO_URL;
    this.currentVersion = ApplicationSettingsService.APPLICATION_VERSION;
  }// inicialize


}// FooterComponent
