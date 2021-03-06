import { Injectable } from '@angular/core';


@Injectable()
export class LandingZoneModuleSettings {

  public static readonly HOME_WALLPAPER_URL: string = '../../../../../assets/images/landingPage_wallpaper_filter.jpg';
  public static readonly ABOUT_US_WALLPAPER_URL: string = '../../../../../assets/images/aboutus_image.jpg';
  public static readonly HOW_WE_WORK_WALLPAPER_URL: string = '../../../../../assets/images/howwework_image.jpg';
  public static readonly GALLERY_WALLPAPER_URL: string = '../../../../../assets/images/gallery_wallpaper.jpg';
  public static readonly CONTACT_WALLPAPER_URL: string = '../../../../../assets/images/contact_wallpaper.jpg';
  public static readonly HOME_1_SECTION_URL: string = '../../../../../assets/images/home_image_compressed.jpg';
  public static readonly COMPANY_IMAGE_LOGO_URL: string = '../../../../../assets/images/Master_Logo_big.svg';

  public static readonly HOW_WE_WORK_WINDOWS_IMAGE_URL: string = 'assets/images/pvcWindows.png';
  public static readonly HOW_WE_WORK_FLOOR_HEATING_IMAGE_URL: string = 'assets/images/floorHeating.png';
  public static readonly HOW_WE_WORK_SILVERBLOCK_IMAGE_URL: string = 'assets/images/silverblock282.png';

  public static readonly IMAGES_GALLERY_DIRECTORY: string = 'assets/gallery';
  public static readonly IMAGES_GALLERY_SUBDIRECTORIES: string[] = [
                                                                    'illescas',
                                                                    'carranque',
                                                                    'rivas',
                                                                    'paracuellos del Jarama',
                                                                    'parla'
                                                                   ];

}// LandingZoneModuleSettings
