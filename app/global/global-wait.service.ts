import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GlobalWaitService {

    constructor() {}

    private waitingSource = new Subject<boolean>();

    waiting$ = this.waitingSource.asObservable();

    wait() {
        this.waitingSource.next(false);
    }

    waitComplete() {
        this.waitingSource.next(true);
    }
}