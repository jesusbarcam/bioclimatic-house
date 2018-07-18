import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private translateService: TranslateService) {
    // Default translate language value
    // This language is used by default from the init
    translateService.setDefaultLang('es');
  }// Constructor

}// AppComponent
