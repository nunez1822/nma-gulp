import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { AuthService } from "../shared/auth.service";
import {ToastrService} from '../global/toastr.service';

@Component({
    templateUrl: 'app/unprotected/create-user.component.html'
})
export class CreateUserComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(
        private fb: FormBuilder, 
        private authService: AuthService, 
        private toastrService: ToastrService
    ) {}

    onSignup() {
      let error;
      let response;
      this.authService.signupUser(this.myForm.value)
                       .then(
                         response => {
                             this.toastrService.success("Sucessfully Created User");
                         }, 
                         error => {
                             this.toastrService.error(error);
                         });
    }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.compose([
                Validators.required,
                this.isEqualPassword.bind(this)
            ])],
        });
    }

    isEmail(control: FormControl): {[s: string]: boolean} {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return {noEmail: true};
        }
    }

    isEqualPassword(control: FormControl): {[s: string]: boolean} {
        if (!this.myForm) {
            return {passwordsNotMatch: true};

        }
        if (control.value !== this.myForm.controls['password'].value) {
            return {passwordsNotMatch: true};
        }
    }
}
