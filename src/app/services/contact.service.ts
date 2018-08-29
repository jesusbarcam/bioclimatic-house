import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class ContactService {

  public static readonly CONTACT_MESSAGE_END_POINT: string = '/contact/message';



  constructor(private http: HttpClient) {
  }// Constructor



  /**
   * @method
   * @param formValues
   * @description
   * This method send contact client data
   * to backend of company.
   */
  public sendMessageOfClientToCompany(formValues: {email: string, message: string}) {
    return this.http.post( ContactService.CONTACT_MESSAGE_END_POINT, formValues )
                    .pipe(map( (res) => res ))
                    .pipe(catchError( (res) => observableThrowError( res.error )) );
  }// SendMessageOfClientToCompany



}// ContactService
