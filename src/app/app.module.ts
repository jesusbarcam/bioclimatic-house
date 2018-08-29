import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UnknowPageComponent } from './components/unknow-page/unknow-page.component';
import { PrivateZoneModule } from './modules/private-zone/private-zone.module';
import { LandingZoneModule } from './modules/landing-zone/landing-zone.module';
import { ContactService } from './services/contact.service';
import { RoutingModule } from './routing.module';

// This function make of constructor to Loader inside of Translate Module,
// We send this function when called to TranslateModule forRoot function.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}// HttpLoaderFactory

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpClientModule,
    TranslateModule.forRoot( {
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    CommonModule,
    PrivateZoneModule,
    LandingZoneModule
  ],
  declarations: [
    AppComponent,
    UnknowPageComponent
  ],
  providers: [
    ContactService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }// AppModule
