import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { BiohMaterialModule } from 'bioh-material';

import { ScrollfxDirective, ElementScrollfxDirective } from './directives/scrollfx.directive';
import { BannerContactComponent } from './components/banner-contact/banner-contact.component';
import { SplashWallpaperComponent } from './components/splash-wallpaper/splash-wallpaper.component';
import { BiohSidebarComponent } from './components/sidebar/sidebar.component';

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
    SplashWallpaperComponent,
    BiohSidebarComponent
  ],

  exports: [
    TranslateModule,
    BannerContactComponent,
    ScrollfxDirective,
    ElementScrollfxDirective,
    SplashWallpaperComponent,
    BiohMaterialModule,
    NgxGalleryModule,
    BiohSidebarComponent
  ]
})
export class SharedComponentsModule {
}// SharedComponentsModule

