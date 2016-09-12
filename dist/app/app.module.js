System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', './app.component', './app.routing', 'primeng/primeng', './main_components/navbar.component', './main_components/footer.component', './main_components/carousel.component', './main_components/featurette.component', './contact/contact.component', './main_components/dashboard.component', './about/about.component', './admin/admin.component', './pricing/pricing.component', "./unprotected/signin.component", "./unprotected/create-user.component", "./protected/protected.component", './lessons/lessons.component', "./shared/auth.guard", "./shared/auth.service", './global/toastr.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, forms_2, app_component_1, app_routing_1, primeng_1, primeng_2, primeng_3, navbar_component_1, footer_component_1, carousel_component_1, featurette_component_1, contact_component_1, dashboard_component_1, about_component_1, admin_component_1, pricing_component_1, signin_component_1, create_user_component_1, protected_component_1, lessons_component_1, auth_guard_1, auth_service_1, toastr_service_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
                forms_2 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
                primeng_2 = primeng_1_1;
                primeng_3 = primeng_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (featurette_component_1_1) {
                featurette_component_1 = featurette_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (pricing_component_1_1) {
                pricing_component_1 = pricing_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (create_user_component_1_1) {
                create_user_component_1 = create_user_component_1_1;
            },
            function (protected_component_1_1) {
                protected_component_1 = protected_component_1_1;
            },
            function (lessons_component_1_1) {
                lessons_component_1 = lessons_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (toastr_service_1_1) {
                toastr_service_1 = toastr_service_1_1;
            }],
        execute: function() {
            // export const firebaseConfig = {
            //     apiKey: "AIzaSyBIlEBUJKz1b1TMIoTONQcTCjbRoy7zIq4",
            //     authDomain: "nma-app-b2ca8.firebaseapp.com",
            //     databaseURL: "https://nma-app-b2ca8.firebaseio.com",
            //     storageBucket: "",
            // };
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routing_1.routing,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            http_1.JsonpModule,
                            primeng_1.CalendarModule,
                            primeng_2.GMapModule,
                            forms_2.ReactiveFormsModule,
                            primeng_3.DialogModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            navbar_component_1.NavbarComponent,
                            footer_component_1.FooterComponent,
                            carousel_component_1.CarouselComponent,
                            featurette_component_1.FeaturetteComponent,
                            contact_component_1.ContactComponent,
                            dashboard_component_1.DashboardComponent,
                            about_component_1.AboutComponent,
                            admin_component_1.AdminComponent,
                            pricing_component_1.PricingComponent,
                            signin_component_1.SigninComponent,
                            create_user_component_1.CreateUserComponent,
                            protected_component_1.ProtectedComponent,
                            lessons_component_1.LessonsComponent
                        ],
                        providers: [
                            auth_guard_1.AuthGuard,
                            auth_service_1.AuthService,
                            toastr_service_1.ToastrService
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=app.module.js.map
