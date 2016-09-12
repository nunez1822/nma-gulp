import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import {ContactForm} from './../contact/contactForm';

declare var firebase: any;

@Injectable()
export class AdminService {

  constructor (private http: Http) {}

  private static get CONTACTS_URL(): string {return 'https://nma-app-b2ca8.firebaseio.com/contacts.json'} ;  // URL to web API

  getContacts(): Observable<ContactForm[]> {
      return this.http.get(AdminService.CONTACTS_URL)
                 .map(response => response.json())
                 .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}