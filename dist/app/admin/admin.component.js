System.register(['@angular/core', './admin.service', 'ng2-toastr/ng2-toastr', './../global/global-wait.service', './../global/toastr.service', './../pipes/searchByFirstName.pipe', './../pipes/searchByLastName.pipe'], function(exports_1, context_1) {
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
    var core_1, admin_service_1, ng2_toastr_1, global_wait_service_1, toastr_service_1, searchByFirstName_pipe_1, searchByLastName_pipe_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_service_1_1) {
                admin_service_1 = admin_service_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (global_wait_service_1_1) {
                global_wait_service_1 = global_wait_service_1_1;
            },
            function (toastr_service_1_1) {
                toastr_service_1 = toastr_service_1_1;
            },
            function (searchByFirstName_pipe_1_1) {
                searchByFirstName_pipe_1 = searchByFirstName_pipe_1_1;
            },
            function (searchByLastName_pipe_1_1) {
                searchByLastName_pipe_1 = searchByLastName_pipe_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(adminService, toastr, _globalWaitService, _toastrService) {
                    this.adminService = adminService;
                    this.toastr = toastr;
                    this._globalWaitService = _globalWaitService;
                    this._toastrService = _toastrService;
                    this.firstName = "";
                    this.lastName = "";
                    this.display = false;
                }
                AdminComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                AdminComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._globalWaitService.wait();
                    this.adminService
                        .getContacts()
                        .subscribe(function (contacts) {
                        _this._globalWaitService.waitComplete();
                        _this.listOfContacts = contacts;
                    }, function (error) { return _this.errorMessage = error; });
                };
                AdminComponent.prototype.initializeSelectedContact = function (contact) {
                    this.selectedContact = contact;
                };
                AdminComponent.prototype.clear = function () {
                    this.firstName = "";
                    this.lastName = "";
                };
                AdminComponent.prototype.showDialog = function () {
                    this.display = true;
                };
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'my-admin',
                        templateUrl: 'app/admin/admin.component.html',
                        providers: [admin_service_1.AdminService, ng2_toastr_1.ToastsManager, global_wait_service_1.GlobalWaitService, toastr_service_1.ToastrService],
                        pipes: [searchByFirstName_pipe_1.SearchByFirstNamePipe, searchByLastName_pipe_1.SearchByLastNamePipe]
                    }), 
                    __metadata('design:paramtypes', [admin_service_1.AdminService, ng2_toastr_1.ToastsManager, global_wait_service_1.GlobalWaitService, toastr_service_1.ToastrService])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});

//# sourceMappingURL=admin.component.js.map
