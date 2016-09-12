/// <reference path="../../typings/globals/toastr/index.d.ts" />

import {Injectable} from '@angular/core';

@Injectable()
export class ToastrService {

    private toastr: Toastr;

    constructor() {}

    warning(message:string) {
        toastr.warning(message);
    }

    error(message:string) {
        toastr.error(message);
    }

    success(message:string) {
        toastr.success(message);
    }
}