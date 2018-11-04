import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { ApplicationSettingsService } from '../../../../services/application-settings.service';
import { BiohOptionSelect } from 'bioh-material';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent implements OnInit, OnDestroy {

  public currentYear: number;
  public languagesList: BiohOptionSelect[];
  public currentVersion: string;
  public biohLogoUrl: string;
  public _subscriptions: Subscription[];


  constructor(private translateService: TranslateService, private changeDetector: ChangeDetectorRef) {
    this._subscriptions = [];
  }// constructor


  ngOnInit() {
    this.inicialize();
  }// ngOnInit


  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }// NgOnDestroy


  /**
   * @private
   * @method
   * @description
   */
  private inicialize() {
    this.whenLanguageChange();
    this.createLanguagesListWithTranslations();
    this.currentYear = new Date().getFullYear();
    this.translateService.use( ApplicationSettingsService.INITIAL_LANGUAGE );
    this.biohLogoUrl = ApplicationSettingsService.BIOH_LOGO_URL;
    this.currentVersion = ApplicationSettingsService.APPLICATION_VERSION;
  }// inicialize


  /**
   * @method
   * @private
   * @description
   */
  private whenLanguageChange() {
    const subscription = this.translateService.onLangChange
    .subscribe(() => {
      this.createLanguagesListWithTranslations();
    }); // Subscriptions
    this._subscriptions.push( subscription );
  }// WhenLanguageChange


  /**
   * @method
   * @private
   * @description
   */
  private createLanguagesListWithTranslations() {
    const subscription = this.translateService.get('LANGUAGES')
    .subscribe((translations) => {
      this.createBiohOptions( translations );
    }); // translations
    this._subscriptions.push( subscription );
  }// CreateLanguagesListWithTranslations



  /**
   * @method
   * @private
   * @param translations
   * @description
   */
  private createBiohOptions(translations: any) {
    this.languagesList = ApplicationSettingsService.LANGUAGES_LIST.map((option) => {
      const optionToActive = new BiohOptionSelect( translations[ option ], option );
      if ( option === this.translateService.currentLang ) {
        optionToActive.selected = true;
      }// If
      return optionToActive;
    }); // CreateBiohOptions
    this.changeDetector.markForCheck();
  }// CreateBiohOptions



  /**
   * @method
   * @public
   * @description
   */
  public onLangChanges(language: BiohOptionSelect) {
    this.translateService.use( language.value );
  }// OnLangChanges


}// FooterComponent
