import { Component, OnInit } from '@angular/core';

// import { ApplicationSettingsService } from '../../../../services/settings/application-settings.service';
// import { LandingZoneModuleSettings } from '../../services/settings/LandingZoneModuleSettings.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  public currentYear: number;
  public currentVersion: string;


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
    this.currentVersion = '2.0.0'; // ApplicationSettingsService.APPLICATION_VERSION;
  }// inicialize


}// FooterComponent
