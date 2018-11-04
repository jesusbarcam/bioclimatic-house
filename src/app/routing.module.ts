import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { landingZoneRoutes } from './modules/landing-zone/routing.module';
import { privateZoneRoutes } from './modules/private-zone/routing.module';

import { PrivateZoneComponent } from './modules/private-zone/private-zone.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';


// All main routes of this application, each module have
// yours routes inside of your routing module.
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'public'},
  {path: 'public', children: [...landingZoneRoutes] },
  {path: 'private', children: [...privateZoneRoutes] },
  {path: '**', pathMatch: 'full', component: UnknowPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})// NgModule

export class RoutingModule {
}// RoutingModule
