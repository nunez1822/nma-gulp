System.register(['@angular/router', './contact/contact.component', './main_components/dashboard.component', './about/about.component', './admin/admin.component', './pricing/pricing.component', "./unprotected/create-user.component", "./unprotected/signin.component", "./protected/protected.component", "./shared/auth.guard", "./lessons/lessons.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, contact_component_1, dashboard_component_1, about_component_1, admin_component_1, pricing_component_1, create_user_component_1, signin_component_1, protected_component_1, auth_guard_1, lessons_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (create_user_component_1_1) {
                create_user_component_1 = create_user_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (protected_component_1_1) {
                protected_component_1 = protected_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (lessons_component_1_1) {
                lessons_component_1 = lessons_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'contact', component: contact_component_1.ContactComponent },
                { path: 'lessons', component: lessons_component_1.LessonsComponent },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: 'pricing', component: pricing_component_1.PricingComponent },
                { path: 'create-user', component: create_user_component_1.CreateUserComponent },
                { path: 'signin', component: signin_component_1.SigninComponent },
                { path: 'protected', component: protected_component_1.ProtectedComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    }
});

//# sourceMappingURL=app.routing.js.map
