import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  private _movileDevicesMenu: boolean;



  constructor() {
    this._movileDevicesMenu = false;
  }// Constructor



  ngOnInit() {
  }// NgOnInit



  /**
   * @method
   * @public
   * @description
   */
  public showMovileDevicesMenu() {
    console.log('SHOW MOVILE DEVICE MENU!!!!');
  }// ShowMovileDevicesMenu



  public get movileDeviceMenu() {
    return this._movileDevicesMenu;
  }// MovileDeviceMenu

}// HeaderComponent
