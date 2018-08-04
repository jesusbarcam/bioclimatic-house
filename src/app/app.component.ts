import {Title} from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private titleService: Title) {
    // Default translate language value
    // This language is used by default from the init
    translateService.setDefaultLang('es');
  }// Constructor



  ngOnInit() {
    this.router.events.pipe(
          filter((event) => event instanceof NavigationEnd ),
          map(() => {
           let child = this.activatedRoute.firstChild;
           while (child) {
              if (child.firstChild) {
                child = child.firstChild;
              } else if (child.snapshot.data && child.snapshot.data['title']) {
                return child.snapshot.data['title'];
              } else {
                return null;
              }// If
            }// While
          })
        ).subscribe((title: any) => {
          if ( title ) {
            this.translateService.get([title])
          .subscribe((translations) => {
            this.titleService.setTitle(`${translations[title]} | Bioclimatic`);
          });
          }// If
        });
  }// NgOnInit



}// AppComponent
