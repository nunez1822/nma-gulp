System.register(["@angular/core", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(router) {
                    this.router = router;
                }
                AuthService.prototype.signupUser = function (user) {
                    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                        .catch(this.handleError);
                };
                AuthService.prototype.signinUser = function (user) {
                    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                        .catch(this.handleError);
                };
                AuthService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Promise.reject(errMsg);
                };
                AuthService.prototype.logout = function () {
                    firebase.auth().signOut();
                    this.router.navigate(['/signin']);
                };
                AuthService.prototype.isAuthenticated = function () {
                    var user = firebase.auth().currentUser;
                    if (user) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map