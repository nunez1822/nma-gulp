System.register(['@angular/core', 'ng2-toastr/ng2-toastr', './contactForm', './contact.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_toastr_1, contactForm_1, contact_service_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (contactForm_1_1) {
                contactForm_1 = contactForm_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(toastr, contactService) {
                    this.toastr = toastr;
                    this.contactService = contactService;
                    this.active = true;
                    this.contact = new contactForm_1.ContactForm("", "", "", "", "");
                }
                ContactComponent.prototype.ngOnInit = function () {
                    this.options = {
                        center: { lat: 36.890257, lng: 30.707417 },
                        zoom: 12
                    };
                    this.overlays = [
                        new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: "Konyaalti" }),
                        new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: "Ataturk Park" }),
                        new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: "Oldtown" }),
                        new google.maps.Polygon({ paths: [
                                { lat: 36.9177, lng: 30.7854 }, { lat: 36.8851, lng: 30.7802 }, { lat: 36.8829, lng: 30.8111 }, { lat: 36.9177, lng: 30.8159 }
                            ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                        }),
                        new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
                        new google.maps.Polyline({ path: [{ lat: 36.86149, lng: 30.63743 }, { lat: 36.86341, lng: 30.72463 }], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
                    ];
                };
                ContactComponent.prototype.handleMapClick = function (event) {
                    //event: MouseEvent of Google Maps api
                };
                ContactComponent.prototype.handleOverlayClick = function (event) {
                    //event.originalEvent: MouseEvent of Google Maps api
                    //event.overlay: Clicked overlay     
                    //event.map: Map instance   
                };
                ContactComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.addContact();
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                    this.contact = new contactForm_1.ContactForm("", "", "", "", "");
                    this.toastr.success('Successfully submitted the form!');
                };
                ContactComponent.prototype.addContact = function () {
                    var _this = this;
                    this.contactService.addContact(this.contact)
                        .subscribe(function (contact) { return _this.contactsFromAdd = contact; }, function (error) { return _this.errorMessage = error; });
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'my-contact',
                        templateUrl: 'app/contact/contact.component.html',
                        styles: ["\n    img {\n      border: 1px solid #ddd;\n      border-radius: 20px;\n      padding: 8px;\n    }\n    .ng-valid[required] {\n      border-left: 5px solid #42A948; /* green */\n    }\n    \n    .ng-invalid {\n      border-left: 5px solid #a94442; /* red */\n    }\n  "],
                        providers: [ng2_toastr_1.ToastsManager, contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager, contact_service_1.ContactService])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=contact.component.js.map
