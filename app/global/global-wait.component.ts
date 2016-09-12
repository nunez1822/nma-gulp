import {Component, OnDestroy} from '@angular/core';
import {Subscription}   from 'rxjs/Subscription';

import {GlobalWaitService} from './global-wait.service';

@Component({
    selector: 'global-wait',
    template: `
    	<div class="overlay" [hidden]="hide">
			<h3>Please wait...</h3>
			<em class="fa fa-spinner fa-spin fa-5x"></em>
		</div>
	`
})
export class GlobalWaitComponent implements OnDestroy {

	hide: boolean = true;
	subscription: Subscription;

	constructor(private _globalWaitService: GlobalWaitService) {
		this.subscription = _globalWaitService.waiting$.subscribe(
			nextValue => {
				this.hide = nextValue;
			}
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}