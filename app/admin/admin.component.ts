import { Component, OnInit } from '@angular/core';
import {AdminService} from './admin.service';
import {ContactForm} from './../contact/contactForm';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {GlobalWaitService} from './../global/global-wait.service';
import {ToastrService} from './../global/toastr.service';

import {SearchByFirstNamePipe} from './../pipes/searchByFirstName.pipe';
import {SearchByLastNamePipe} from './../pipes/searchByLastName.pipe';

import {DialogModule} from 'primeng/primeng';

@Component({
    selector: 'my-admin',
    templateUrl: 'app/admin/admin.component.html',
    providers: [AdminService, ToastsManager, GlobalWaitService, ToastrService],
    pipes: [SearchByFirstNamePipe, SearchByLastNamePipe]
})
export class AdminComponent implements OnInit {
    listOfContacts: ContactForm[];
    errorMessage: string;
    firstName = "";
    lastName = "";
    selectedContact: ContactForm;
    display: boolean = false;

    constructor(private adminService: AdminService,
                private toastr: ToastsManager,
                private _globalWaitService: GlobalWaitService,
                private _toastrService: ToastrService) { }

    ngOnInit(): any {
        this.getContacts();
     }

    getContacts() {
        this._globalWaitService.wait();
        this.adminService
            .getContacts()
            .subscribe(
                contacts => {
                    this._globalWaitService.waitComplete();
                    this.listOfContacts = contacts;
                },
                error =>  this.errorMessage = error);
    }

    initializeSelectedContact(contact: ContactForm) {
        this.selectedContact = contact;
    }

    clear() {
        this.firstName = "";
        this.lastName = "";
    }

    showDialog() {
        this.display = true;
    }
}