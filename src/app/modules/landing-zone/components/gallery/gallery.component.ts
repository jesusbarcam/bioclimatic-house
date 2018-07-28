import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation, NgxGalleryAction } from 'ngx-gallery';
import { Observable } from 'rxjs';

import { LandingZoneModuleSettings } from '../../services/settings/landing-zone-module-settings.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {

  public static readonly IMAGES_AMOUNT_PER_GALLERY: number = 5;

  private _foundGallery: boolean;
  private _activedDirectory: number;
  private _galleryOptions: NgxGalleryOptions[];
  private _galleryImages: NgxGalleryImage[];


  /**
   * @method
   * @constructor
   */
  constructor(private detectorChanges: ChangeDetectorRef) {
    this._galleryImages = [];
  }// Constructor



  /**
   * @method
   * @lifecycle
   */
  ngOnInit() {
    this.buildOptionsOfGallery();
    this.activeAndBuildGallery(0);
  }// NgOnInit



  /**
   * @method
   * @private
   * @description
   */
  private buildOptionsOfGallery() {
    this._galleryOptions = [
      {
          width: '100%',
          height: '850px',
          thumbnailsColumns: GalleryComponent.IMAGES_AMOUNT_PER_GALLERY,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 10,
          thumbnailsPercent: 10,
          thumbnailsMargin: 5,
          thumbnailMargin: 5
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];
  }// BuildOptionsOfGallery


  private activeAndBuildGallery(directoryNumber: number) {
    this._activedDirectory = directoryNumber;
    this.buildGallery().subscribe((gallery) => {
      this._galleryImages = gallery;
      this._foundGallery = ( gallery.length > 0 );
      this.detectorChanges.markForCheck();
    });
  }// ActiveAndBuildGallery


  /**
   * @method
   * @private
   * @description
   */
  private buildGallery(): Observable<NgxGalleryImage[]> {
    return new Observable ((observer) => {

      const activeDirectoryName = LandingZoneModuleSettings.IMAGES_GALLERY_SUBDIRECTORIES[ this._activedDirectory ];
      const url = `${LandingZoneModuleSettings.IMAGES_GALLERY_DIRECTORY}/${activeDirectoryName}`;
      const imagesCount = GalleryComponent.IMAGES_AMOUNT_PER_GALLERY;
      const gallery = [];

      for (let i = 0; i < imagesCount; i++) {
        const image = {
          small: `${url}/img_${i}.jpg`,
          medium: `${url}/img_${i}.jpg`,
          big: `${url}/img_${i}.jpg`
        }; // Image
        gallery.push( image );
      }// For
      observer.next( gallery );
    }); // Observable
  }// BuildGallery


  /**
   * @method
   * @description
   */
  public onImagesReady(event) {
    console.log("ON IMAGES READYYYYYYYYYY::::::::::::: ", event );
  }// OnImagesReady



  public get galleryOptions(): NgxGalleryOptions[] {
    return this._galleryOptions;
  }// GalleryOptions

  public get galleryImages(): NgxGalleryImage[] {
    return this._galleryImages;
  }// GalleryImages


  public get foundGallery() {
    return this._foundGallery;
  }// FoundGallery

}// GalleryComponent
