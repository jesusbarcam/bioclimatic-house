import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AccessPrivateZoneComponent } from './components/access-private-zone/access-private-zone.component';
import { PrivateZoneComponent } from './private-zone.component';


// This routes are only routes of Private Zone module
export const privateZoneRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'access' },
  { path: 'access', pathMatch: 'full', component: PrivateZoneComponent, data: {title: 'BROWSER_TITLES.PRIVATE_ZONE'} }
];


@NgModule({
  imports: [RouterModule.forChild( privateZoneRoutes )],
  exports: [RouterModule]
})
export class PrivateZoneRoutingModule {
}// PrivateZoneRoutingModule
