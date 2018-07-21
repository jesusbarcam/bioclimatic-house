import { Directive, HostListener, Input, ElementRef } from '@angular/core';

/**
 * @description
 * This directive controller position of component where she is inserted,
 * in relation with body scroll position, and this directive insert fx to
 * component when the component is in the position that we want.
 */
@Directive({
  selector: '[scrollfx]'
})
export class ScrollfxDirective {


  @Input('fxShow') fxShow: string;
  @Input('fxHide') fxHide: string;


  /**
   * @method
   * @constructor
   * @param elementRef
   */
  constructor(private elementRef: ElementRef) {
  }// Constructor



  /**
   * @method
   * @private
   * @description
   * Return top position of element where
   * be this directive
   */
  private calculateElementTopPosition(): number {
    return this.elementRef.nativeElement.getBoundingClientRect().top;
  }// CalculateElementTopPosition




  /**
   * @method
   * @private
   * @description
   */
  private calculatePercentPositionScroll() {
    //const scrollTop = ( window.pageYOffset !== undefined ) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body.scrollTop);
    // var docHeight = document.height;
    // var winHeight = $(window).height();
    // var scrollPercent = (scrollTop) / (docHeight - winHeight);
    //return Math.round(scrollPercent * 100);
    const windowHeight: number = window.innerHeight;
    const scrollPosition: number = document.body.scrollTop;

    //console.log("HEIGHT OF SCREEN: ", windowHeight );
    //console.log("SCROLL POSITION: ", scrollPosition );
    return ( scrollPosition * 100 ) / windowHeight;
  }// CalculatePercentPositionScroll


  /**
   * @method
   * @public
   * @param event
   * @description
   */
  @HostListener('window:scroll', ['$event'])
  public onScroll(event: any) {

    // console.log( '\nPOSITION SCROLL: ', event.target.scrollTop );
    // console.log( 'ELEMENT REF CLIENT-RECT.TOP: ' + this.calculateElementTopPosition() );
    // console.log('\n');

    // do tracking
    this.calculatePercentPositionScroll();
    // Listen to click events in the component
    const tracker = event.target;
    const limit = tracker.scrollHeight - tracker.clientHeight;

    // console.log('SCROLL EVENT: ', this.calculatePercentPositionScroll());
    // console.log('TRACKER: ', tracker );
    // console.log( 'LIMIT: ', limit );

    if (event.target === limit) {
      alert('end reached');
    }
  }// onScroll




  /**
   * @method
   * @public
   * @param event
   * @description 
   */
  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    // console.log('\nWINDOW RESIZE EVENT: ', this.calculateElementTopPosition() );
  }// OnResize

}// ScrollfxDirective



/**
 * @class
 * @description
 */
@Directive({
  selector: '[elementScrollfx]'
})
export class ElementScrollfxDirective {

  @Input('showFxClass') showFxClass: string;
  @Input('hideFxClass') hideFxClass: string;
  @Input('fxDelay') fxDelay: number;

}// ElementScrollfxDiretive

