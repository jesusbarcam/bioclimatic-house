import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { BiohMaterialModule } from 'bioh-material';

import { ScrollfxDirective, ElementScrollfxDirective } from './directives/scrollfx.directive';
import { BannerContactComponent } from './components/banner-contact/banner-contact.component';
import { SplashWallpaperComponent } from './components/splash-wallpaper/splash-wallpaper.component';

@NgModule({

  imports: [
    CommonModule,
    TranslateModule,
    BiohMaterialModule,
    NgxGalleryModule
  ],

  declarations: [
    BannerContactComponent,
    ScrollfxDirective,
    ElementScrollfxDirective,
    SplashWallpaperComponent
  ],

  exports: [
    TranslateModule,
    BannerContactComponent,
    ScrollfxDirective,
    ElementScrollfxDirective,
    SplashWallpaperComponent,
    BiohMaterialModule,
    NgxGalleryModule
  ]
})
export class SharedComponentsModule {
}// SharedComponentsModule

