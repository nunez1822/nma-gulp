System.register(["@angular/core", "@angular/forms", "../shared/auth.service", '../global/toastr.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, auth_service_1, toastr_service_1;
    var CreateUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (toastr_service_1_1) {
                toastr_service_1 = toastr_service_1_1;
            }],
        execute: function() {
            CreateUserComponent = (function () {
                function CreateUserComponent(fb, authService, toastrService) {
                    this.fb = fb;
                    this.authService = authService;
                    this.toastrService = toastrService;
                    this.error = false;
                    this.errorMessage = '';
                }
                CreateUserComponent.prototype.onSignup = function () {
                    var _this = this;
                    var error;
                    var response;
                    this.authService.signupUser(this.myForm.value)
                        .then(function (response) {
                        _this.toastrService.success("Sucessfully Created User");
                    }, function (error) {
                        _this.toastrService.error(error);
                    });
                };
                CreateUserComponent.prototype.ngOnInit = function () {
                    this.myForm = this.fb.group({
                        email: ['', forms_1.Validators.compose([
                                forms_1.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', forms_1.Validators.required],
                        confirmPassword: ['', forms_1.Validators.compose([
                                forms_1.Validators.required,
                                this.isEqualPassword.bind(this)
                            ])],
                    });
                };
                CreateUserComponent.prototype.isEmail = function (control) {
                    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                        return { noEmail: true };
                    }
                };
                CreateUserComponent.prototype.isEqualPassword = function (control) {
                    if (!this.myForm) {
                        return { passwordsNotMatch: true };
                    }
                    if (control.value !== this.myForm.controls['password'].value) {
                        return { passwordsNotMatch: true };
                    }
                };
                CreateUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/unprotected/create-user.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, toastr_service_1.ToastrService])
                ], CreateUserComponent);
                return CreateUserComponent;
            }());
            exports_1("CreateUserComponent", CreateUserComponent);
        }
    }
});

//# sourceMappingURL=create-user.component.js.map
