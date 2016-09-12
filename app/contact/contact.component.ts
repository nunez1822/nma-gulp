import { Component, Input, OnInit, provide} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {ContactForm} from './contactForm';
import {ContactService} from './contact.service';

declare var google: any;

@Component({
  selector: 'my-contact',
  templateUrl: 'app/contact/contact.component.html',
  styles: [`
    img {
      border: 1px solid #ddd;
      border-radius: 20px;
      padding: 8px;
    }
    .ng-valid[required] {
      border-left: 5px solid #42A948; /* green */
    }
    
    .ng-invalid {
      border-left: 5px solid #a94442; /* red */
    }
  `],
  providers: [ToastsManager, ContactService]
})

export class ContactComponent implements OnInit{
  active = true;
  errorMessage: string;
  contactsFromAdd: ContactForm;
  contact = new ContactForm("","","","","");
  options: any;
  overlays: any[];

  constructor(private toastr: ToastsManager,
              private contactService: ContactService) {}
    
  ngOnInit() {
      this.options = {
          center: {lat: 36.890257, lng: 30.707417},
          zoom: 12
      };
      
      this.overlays = [
          new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
          new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
          new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
          new google.maps.Polygon({paths: [
              {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
          ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
          }),
          new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
          new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
      ];
  }
  
  handleMapClick(event) {
      //event: MouseEvent of Google Maps api
  }
  
  handleOverlayClick(event) {
      //event.originalEvent: MouseEvent of Google Maps api
      //event.overlay: Clicked overlay     
      //event.map: Map instance   
  }

  onSubmit() {
    this.addContact();
    this.active = false;
    setTimeout(() => this.active = true, 0);
    this.contact = new ContactForm("","","","","");
    this.toastr.success('Successfully submitted the form!');
  }

  addContact () {
    this.contactService.addContact(this.contact)
                     .subscribe(
                       contact  => this.contactsFromAdd = contact,
                       error =>  this.errorMessage = error);
  }
}