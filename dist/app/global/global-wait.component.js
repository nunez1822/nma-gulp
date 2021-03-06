System.register(['@angular/core', './global-wait.service'], function(exports_1, context_1) {
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
    var core_1, global_wait_service_1;
    var GlobalWaitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (global_wait_service_1_1) {
                global_wait_service_1 = global_wait_service_1_1;
            }],
        execute: function() {
            GlobalWaitComponent = (function () {
                function GlobalWaitComponent(_globalWaitService) {
                    var _this = this;
                    this._globalWaitService = _globalWaitService;
                    this.hide = true;
                    this.subscription = _globalWaitService.waiting$.subscribe(function (nextValue) {
                        _this.hide = nextValue;
                    });
                }
                GlobalWaitComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                GlobalWaitComponent = __decorate([
                    core_1.Component({
                        selector: 'global-wait',
                        template: "\n    \t<div class=\"overlay\" [hidden]=\"hide\">\n\t\t\t<h3>Please wait...</h3>\n\t\t\t<em class=\"fa fa-spinner fa-spin fa-5x\"></em>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [global_wait_service_1.GlobalWaitService])
                ], GlobalWaitComponent);
                return GlobalWaitComponent;
            }());
            exports_1("GlobalWaitComponent", GlobalWaitComponent);
        }
    }
});

//# sourceMappingURL=global-wait.component.js.map
