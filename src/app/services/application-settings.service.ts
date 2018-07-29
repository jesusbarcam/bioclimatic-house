import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingsService {

  public static readonly BIOH_LOGO_URL: string = '../../assets/images/Master_Logo_big.svg';
  public static readonly APPLICATION_VERSION: string = '1.0.0';

}// ApplicationSettingsService
