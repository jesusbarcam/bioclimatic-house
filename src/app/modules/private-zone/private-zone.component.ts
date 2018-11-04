import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'private-zone',
  templateUrl: './private-zone.component.html',
  styleUrls: ['./private-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateZoneComponent implements OnInit {

  constructor() { }// Constructor


  ngOnInit() {
  }// ngOnInit


}// PrivateZoneComponent
