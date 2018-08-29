import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'splash-wallpaper',
  templateUrl: './splash-wallpaper.component.html',
  styleUrls: ['./splash-wallpaper.component.scss']
})
export class SplashWallpaperComponent implements OnInit {


  private static readonly DEFAULT_PERCENT_LOGO_POSITION: number = 18;
  private static readonly DEFAULT_WIDTH_LOGO: number = 476;
  private static readonly DEFAULT_BREAK_POINT_PARALAX_FX: number = 60;
  private static readonly DEFAULT_MASK_OPACITY_VALUE: number = 1;

  public currentScrollLocation: number;
  public maskOpacityValue: number;
  public summaryOpacity: number;
  public positionSummary: number;
  public blurFXClass: string;
  public logotypePosition: string;
  public currentLogotypeLocation: number;
  public completed: boolean;
  public insert: boolean;

  @Input('imageUrl')
  public imageUrl: string;

  @Input('summary')
  public summary: string;

  @Input('detail')
  public detail: string;

  @ViewChild('detectedScroll')
  private detectedScroll: ElementRef;

  @ViewChild('summaryElement')
  private summaryElement: ElementRef;

  constructor( private elementRef: ElementRef ) {
    this.currentLogotypeLocation = SplashWallpaperComponent.DEFAULT_PERCENT_LOGO_POSITION;
  }// constructor



  /**
   * @implements
   * @method
   */
  ngOnInit() {
    this.inicialize();
    this.checkResourcesRequired();
  }// ngOnInit



  /**
   * @private
   * @method
   * @description
   */
  private inicialize() {
    this.completed = false;
    this.insert = false;
    this.summaryOpacity = SplashWallpaperComponent.DEFAULT_MASK_OPACITY_VALUE;
    this.logotypePosition = this.DEFAULT_PERCENT_LOGO_POSITION + '%';
  }// inicialize



  /**
   * @private
   * @method
   * @description
   */
  public getPercentOfScrollPosition() {
    const windowHeight: number = window.innerHeight;
    const scrollPosition: number = document.body.scrollTop || window.pageYOffset;
    return ( scrollPosition * 100 ) / windowHeight;
  }// getPointScrollPercent



  /**
   * @private
   * @method
   * @description
   * Method that check all resources that this
   * component need for work.
   */
  private checkResourcesRequired() {
    // if ( !this.imageUrl ) { this.exceptionService.generateException('notResources') }// if
  }// checkResourcesRequired



  /**
   * @public
   * @method
   * @description
   */
  public goToNextStep() {
    // NOTE: Create scroll animation and move scroll to top page!
  }// GoToNextStep



  /**
   * @implements
   * @method
   * @param event
   * @description
   */
  @HostListener('window:scroll', ['$event'])
  scrollListener(event: any) {

    this.completed = false;
    const percentHeight: number = this.getPercentOfScrollPosition();

    if ( percentHeight < 1 ) {
      this.resetStateOfSplash();
    }// If
    if ( !this.positionSummary ) {
      this.positionSummary = (this.detectedScroll.nativeElement.getBoundingClientRect().top + 50 ) / window.innerHeight * 100;
    }// If

    if ( ( percentHeight >= ( 100 - this.positionSummary) ) ) {
      this.insert = true;
      // Calculate state values of splash depend of scroll values
      this.calculateStateOfSplash( percentHeight );
      this.calculateSummaryOpacity( percentHeight );

    } else {
      this.logotypePosition = this.DEFAULT_PERCENT_LOGO_POSITION + '%';
    }// if
    // Update state of splash with news values like opacity of mask,
    // blurFX, logo position etc...
    this.updateStateOfSplash();
  }// scrollListener




  /**
   * @private
   * @method
   * @description
   */
  private calculateStateOfSplash(percentHeight: number) {
    const distance: number = ( percentHeight - ( 100 - this.positionSummary) );
    let headerPosition: number = (this.currentLogotypeLocation - (distance * 0.9));

    if ( headerPosition < 0.5 ) {
      this.completed = true;
      headerPosition = 0;
    }// if
    this.toAssignSummaryPosition( headerPosition );
  }// calculateStateOfSplash



  /**
   * @private
   * @method
   * @param percentHeight
   * @description
   */
  private calculateSummaryOpacity( percentHeight: number ) {
    const summaryDimensionPercent: number = (this.summaryElement.nativeElement.offsetHeight / window.innerHeight * 100);
    this.summaryOpacity = (( 90 - summaryDimensionPercent ) - (percentHeight)) / 10;
  }// CalculateSummaryOpacity


  /**
   * @method
   * @private
   * @description
   */
  private resetStateOfSplash() {
    this.summaryOpacity = SplashWallpaperComponent.DEFAULT_MASK_OPACITY_VALUE;
    this.logotypePosition = this.DEFAULT_PERCENT_LOGO_POSITION + '%';
  }// ResetStateOfSplash


  /**
   * @private
   * @method
   * @description
   */
  private updateStateOfSplash() {

    const scrollPosition: number = document.body.scrollTop || window.pageYOffset;
    // Save location in currentLocation of scroll
    this.currentScrollLocation = scrollPosition;

    // increments mask opacity depend of scroll location
    this.maskOpacityValue = this.calculateOpacity( scrollPosition );
    // Add class of blurFX depend of scroll location
    this.blurFXClass = this.calculateBlurEffect( scrollPosition );
  }// updateStateOfSplash





  /**
   * @private
   * @method
   * @param headerPosition
   * @description
   */
  private toAssignSummaryPosition(headerPosition: number) {
    this.logotypePosition = ''.concat( headerPosition + '' ).concat('%');
  }// toAssignLogoPosition





  /**
   * @private
   * @method
   * @param scrollPosition
   * @description
   */
  private calculateOpacity(scrollPosition: number) {
    return (scrollPosition / 650);
  }// calculateOpacity




  /**
   * @private
   * @method
   * @description
   */
  private calculateBlurEffect(scrollPosition: number) {
    return 'blur-'.concat( '' + Math.round(scrollPosition / 100) ).concat('-fx');
  }// CalculateBlurEffect




  public get DEFAULT_PERCENT_LOGO_POSITION() {
    return SplashWallpaperComponent.DEFAULT_PERCENT_LOGO_POSITION;
  }// DEFAULT_PERCENT_LOGO_POSITION

  public get DEFAULT_BREAK_POINT_PARALAX_FX() {
    return SplashWallpaperComponent.DEFAULT_BREAK_POINT_PARALAX_FX;
  }// DEFAULT_BREAK_POINT_PARALAX_FX

}// RAWSplashScrollComponent
