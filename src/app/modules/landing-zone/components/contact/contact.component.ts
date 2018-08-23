import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {


  private _contactForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {}// Constructor

  ngOnInit() {
    this.build();
  }// NgOnInit


  private build() {
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
   * @public
   * @description
   */
  public submitBioclimaticMessage() {

    console.log("CHECKEO DEL FORMULARIO DE ENVIO: ", this._contactForm );
    if ( this._contactForm.valid ) {
      console.log("AHORA ENVIAMOS EL EMAIL AL SERVER!");
    } else {
      console.log("AHORA NO ENVIAMOS EL EMAIL EXISTEN ERRORES!!");
    }// If
  }// SubmitBioclimaticMessage



  /**
   * @method
   * @public
   * @description
   * This method clear all fields of contact form
   */
  public resetBioclimaticMessage() {
    this._contactForm.controls[ 'email' ].setValue( null );
    this._contactForm.controls[ 'message' ].setValue( null );
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

}// ContactComponent
