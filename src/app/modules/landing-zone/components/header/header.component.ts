import { Component, OnInit , ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {



  private _movileDevicesMenu: boolean;
  private _sidebarIsOpen: boolean;



  constructor(private changeDetector: ChangeDetectorRef,
              private router: Router) {

    this._movileDevicesMenu = false;
    this._sidebarIsOpen = false;
  }// Constructor



  ngOnInit() {
  }// NgOnInit



  /**
   * @method
   * @public
   * @description
   */
  public showMovileDevicesMenu(event: Event) {
    event.stopPropagation();
    this._sidebarIsOpen = !this._sidebarIsOpen;
    this.changeDetector.markForCheck();
  }// ShowMovileDevicesMenu


  /**
   * @method
   * @public
   * @description
   */
  public sidebarIsClosed() {
    if ( this._sidebarIsOpen ) {
      this._sidebarIsOpen = false;
      this.changeDetector.markForCheck();
    }// If
  }// SidebarIsClosed



  public miniNavigatorClick(path: string) {
    this._sidebarIsOpen = false;
    this.changeDetector.markForCheck();
    setTimeout(() => {
      this.router.navigate([ 'public', path ]);
    }, 650);
  }// MiniNavigatorClick


  public get movileDeviceMenu() {
    return this._movileDevicesMenu;
  }// MovileDeviceMenu

  public get sidebarIsOpen() {
    return this._sidebarIsOpen;
  }// SidebarIsOpen

}// HeaderComponent
