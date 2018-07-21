import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ScrollfxDirective, ElementScrollfxDirective } from './directives/scrollfx.directive';
import { BannerContactComponent } from './components/banner-contact/banner-contact.component';

@NgModule({

  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    BannerContactComponent,
    ScrollfxDirective,
    ElementScrollfxDirective
  ],
  exports: [
    BannerContactComponent,
    ScrollfxDirective,
    ElementScrollfxDirective
  ]
})
export class SharedComponentsModule {
}// SharedComponentsModule

