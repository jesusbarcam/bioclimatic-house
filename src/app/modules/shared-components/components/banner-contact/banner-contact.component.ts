import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'banner-contact',
  templateUrl: './banner-contact.component.html',
  styleUrls: ['./banner-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BannerContactComponent implements OnInit {

  constructor(private router: Router) { }// Constructor

  ngOnInit() {
  }// NgOnInit


  /**
   * @private
   * @method
   * @description
   * When user make click in banner, 
   * app must will navigate to contact section
   */
  private clickContact(event: Event) {
    this.router.navigate([ '/public/contact' ]);
  }// ClickContact

}// BannerContactComponent
