import { Component, OnInit, Input, Output, OnChanges, SimpleChanges,
   ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'bioh-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiohSidebarComponent implements OnInit {

  @Input()
  public open: boolean;

  @Output()
  public close: EventEmitter<void>;


  constructor() {
    this.build();
  }// Constructor


  private build() {
    this.open = false;
    this.close = new EventEmitter<void>();
  }// Build


  ngOnInit() {
  }// NgOnInit




  /**
   * @method
   * @description
   */
  public closeSidebar() {
    if ( this.open ) {
      this.close.emit();
    }// If
  }// CloseSidebar


}// BiohSidebarComponent
