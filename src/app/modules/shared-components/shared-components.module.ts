import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BiohMaterialModule } from 'bioh-material';

import { ScrollfxDirective, ElementScrollfxDirective } from './directives/scrollfx.directive';
import { BannerContactComponent } from './components/banner-contact/banner-contact.component';
import { SplashWallpaperComponent } from './components/splash-wallpaper/splash-wallpaper.component';

@NgModule({

  imports: [
    CommonModule,
    TranslateModule,
    BiohMaterialModule
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
    BiohMaterialModule
  ]
})
export class SharedComponentsModule {
}// SharedComponentsModule

