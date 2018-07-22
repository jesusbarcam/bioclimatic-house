import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ScrollfxDirective, ElementScrollfxDirective } from './directives/scrollfx.directive';
import { BannerContactComponent } from './components/banner-contact/banner-contact.component';
import { SplashWallpaperComponent } from './components/splash-wallpaper/splash-wallpaper.component';

@NgModule({

  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    BannerContactComponent,
    ScrollfxDirective,
    ElementScrollfxDirective,
    SplashWallpaperComponent
  ],
  exports: [
    BannerContactComponent,
    ScrollfxDirective,
    ElementScrollfxDirective,
    SplashWallpaperComponent,
    TranslateModule
  ]
})
export class SharedComponentsModule {
}// SharedComponentsModule

