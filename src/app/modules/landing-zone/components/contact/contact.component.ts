import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../../../services/contact.service';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit, OnDestroy {

  public static readonly TRANSLATION_404_ERROR_MESSAGE = 'ERRORS.E404';


  private _contactForm: FormGroup;
  private _subscriptions: Subscription[];
  private _shipping: boolean;
  private _dispatched: boolean;
  private _shippingError: string;


  constructor(private formBuilder: FormBuilder,
              private changeDetector: ChangeDetectorRef,
              private translateService: TranslateService,
              private contactService: ContactService) {
  }// Constructor



  ngOnInit() {
    this.build();
  }// NgOnInit



  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe() );
  }// NgOnDestroy



  private build() {
    this._shipping = false;
    this._dispatched = false;
    this._subscriptions = [];
    this.buildContactForm();
  }// Build



  private buildContactForm() {
    this._contactForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required]
    });
  }// BuildContactForm



  /**
   * @method
   * @param error
   * @description
   */
  private handlerOfSendMessageError( error: HttpErrorResponse) {
    const errorCode = error.status;
    let translationCode = null;
    switch ( errorCode ) {
      case 404:
        translationCode = ContactComponent.TRANSLATION_404_ERROR_MESSAGE;
    }// Switch
    // Get translation of error message
    this.showTranslationErrorMessage( translationCode );
  }// HandlerOfSendMessageError



  /**
   * @method
   * @param translationCode
   * @description
   */
  private showTranslationErrorMessage(translationCode: string) {
    // Get translation of message
    const subscription = this.translateService.get( translationCode )
    .subscribe(( translations ) => {
      this._shippingError = translations;
      this.changeDetector.markForCheck();
    }); // subscribe
    this._subscriptions.push( subscription );
  }// ShowTranslationErrorMessage



  /**
   * @method
   * @param resp
   * @description
   */
  private handlerOfSuccessSendMessage( resp: any ) {
    this._dispatched = true;
    this.changeDetector.markForCheck();
  }// HandlerOfSuccessSendMessage



  /**
   * @method
   * @public
   * @description
   * This method check if contact form is valid,
   * for send to backend this form.
   */
  public submitBioclimaticMessage() {
    // Check if contact form is valid,
    // we only will sending form to backend if
    // all data are correct!
    if ( this._contactForm.valid ) {
      this._shipping = true;
      this.contactService.sendMessageOfClientToCompany( this._contactForm.getRawValue() )
      .subscribe((resp) => {
        this._dispatched = true;
        this.handlerOfSuccessSendMessage( resp );

      },
      (error) => {
        this._dispatched = true;
        this.handlerOfSendMessageError( error );

      });
    } else {
      // If form is invalidate, we mark contact form as touched
      // for show all errors in contact form...
      this._contactForm.markAsTouched();
    }// If
  }// SubmitBioclimaticMessage



  /**
   * @method
   * @public
   * @description
   * This method clear all fields of contact form
   */
  public resetBioclimaticMessage() {
    this._shipping = false;
    this._dispatched = false;
    this._shippingError = undefined;
    this._contactForm.controls[ 'email' ].setValue( null );
    this._contactForm.controls[ 'message' ].setValue( null );
    this._contactForm.markAsUntouched();
  }// ResetBioclimaticMessage



  public get hasErrorInEmailInput() {
    return this._contactForm.touched && this._contactForm.controls['email'].invalid;
  }// HasErrorInEmailInput

  public get ifRequiredValidationError() {
    return this._contactForm.touched && (this._contactForm.controls['email'].hasError('required'));
  }// IfRequiredValidationError


  public get ifFormatEmailValidationError() {
    return this._contactForm.touched && (this._contactForm.controls['email'].hasError('email'));
  }

  public get hasErrorInCommentaryTextarea() {
    return this._contactForm.touched && (this._contactForm.controls['message'].invalid);
  }// HasErrorInCommentaryTextarea

  public get contactForm() {
    return this._contactForm;
  }// ContactForm

  public get dispatched() {
    return this._dispatched;
  }// Dispatched

  public get shipping() {
    return this._shipping;
  }// Shipping

  public get shippingError() {
    return this._shippingError;
  }// ShippingError

}// ContactComponent
