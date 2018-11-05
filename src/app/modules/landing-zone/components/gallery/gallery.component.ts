import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';
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

  public static readonly IMAGES_AMOUNT_PER_GALLERY: number = 21;

  private _foundGallery: boolean;
  private _activedDirectory: number;
  private _galleryOptions: NgxGalleryOptions[];
  private _galleryImages: NgxGalleryImage[];
  private _selectors: string[];
  private _activedSelector: string;


  @HostBinding('class.preview-view')
  previewViewActivated = false;


  /**
   * @method
   * @constructor
   */
  constructor(private detectorChanges: ChangeDetectorRef) {
    this._galleryImages = [];
    this._selectors = LandingZoneModuleSettings.IMAGES_GALLERY_SUBDIRECTORIES;
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
    this._activedSelector = this.findActivedSelector();
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

      const url = `${LandingZoneModuleSettings.IMAGES_GALLERY_DIRECTORY}/${this.findActivedSelector()}`;
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
  private findActivedSelector() {
    return LandingZoneModuleSettings.IMAGES_GALLERY_SUBDIRECTORIES[ this._activedDirectory ];
  }// FindActivedSelector



  /**
   * @method
   * @param index
   * @description
   */
  public changeGalleryTo(index: number) {
    this.activeAndBuildGallery( index );
  }// ChangeGalleryTo



  /**
   * @method
   * @description
   */
  public onImagesReady(event) {
    // TODO: it still not implemented
  }// OnImagesReady



  /**
   * @method
   * @description
   */
  public onPreviewViewOpen() {
    this.previewViewActivated = true;
    this.detectorChanges.markForCheck();
  }// OnPreviewChange



  /**
   * @method
   * @description
   */
  public onPreviewViewClose() {
    this.previewViewActivated = false;
    this.detectorChanges.markForCheck();
  }// onPreviewViewClose


  /**
   * @method
   * @param selector
   * @description
   */
  public formaterSelector(selector: string) {
    const firstCharacter = selector.charAt(0).toUpperCase();
    const rest = selector.substr(1, selector.length );
    return `${firstCharacter}${rest}`;
  }// FormaterSelector



  public get galleryOptions(): NgxGalleryOptions[] {
    return this._galleryOptions;
  }// GalleryOptions

  public get galleryImages(): NgxGalleryImage[] {
    return this._galleryImages;
  }// GalleryImages

  public get foundGallery() {
    return this._foundGallery;
  }// FoundGallery

  public get selectors() {
    return this._selectors;
  }// Selectors

  public get activedSelector() {
    return this._activedSelector;
  }// ActivedDirectory

}// GalleryComponent
