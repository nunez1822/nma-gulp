System.register(["@angular/core", "@angular/forms", '@angular/router', "../shared/auth.service", '../global/toastr.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, auth_service_1, toastr_service_1;
    var SigninComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (toastr_service_1_1) {
                toastr_service_1 = toastr_service_1_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(fb, authService, router, toastrService) {
                    this.fb = fb;
                    this.authService = authService;
                    this.router = router;
                    this.toastrService = toastrService;
                    this.error = false;
                    this.errorMessage = '';
                }
                SigninComponent.prototype.onSignin = function () {
                    var _this = this;
                    var error;
                    var response;
                    this.authService.signinUser(this.myForm.value)
                        .then(function (response) {
                        _this.toastrService.success("Successfully Logged In");
                        _this.myForm.reset();
                        _this.router.navigate(['/admin']);
                    }, function (error) {
                        _this.toastrService.error(error);
                        _this.myForm.reset();
                    });
                };
                SigninComponent.prototype.ngOnInit = function () {
                    this.myForm = this.fb.group({
                        email: ['', forms_1.Validators.required],
                        password: ['', forms_1.Validators.required],
                    });
                };
                SigninComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/unprotected/signin.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router, toastr_service_1.ToastrService])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_1("SigninComponent", SigninComponent);
        }
    }
});
//# sourceMappingURL=signin.component.js.map