import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollfxDirective, ElementScrollfxDirective } from './directives/scrollfx.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollfxDirective,
    ElementScrollfxDirective
  ],
  exports: [
    ScrollfxDirective,
    ElementScrollfxDirective
  ]
})
export class SharedComponentsModule {
}// SharedComponentsModule

