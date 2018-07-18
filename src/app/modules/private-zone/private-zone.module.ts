import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateZoneRoutingModule } from './routing.module';
import { PrivateZoneComponent } from './private-zone.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

// import { AccessPrivateZoneComponent } from './components/access-private-zone/access-private-zone.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateZoneRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    PrivateZoneComponent
    // AccessPrivateZoneComponent
  ],
  exports: [
    PrivateZoneComponent
  ]
})
export class PrivateZoneModule {
}// PrivateZoneModule
