import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";
import {Router} from '@angular/router';

import { AuthService } from "../shared/auth.service";
import {ToastrService} from '../global/toastr.service';

@Component({
    templateUrl: 'app/unprotected/signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(
        private fb: FormBuilder, 
        private authService: AuthService,
        private router: Router,
        private toastrService: ToastrService
    ) {}

    onSignin() {
      let error;
      let response;
      this.authService.signinUser(this.myForm.value)
                       .then(
                         response => {
                             this.toastrService.success("Successfully Logged In");
                             this.myForm.reset();
                             this.router.navigate(['/admin']);
                         }, 
                         error => {
                             this.toastrService.error(error);
                             this.myForm.reset();
                         });
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
