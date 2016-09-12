import { Component, OnInit } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
    <my-navbar></my-navbar>
    <router-outlet></router-outlet>
    <my-footer></my-footer>
  `
})

export class AppComponent implements OnInit {

    // private items = [];

    ngOnInit() {
    //     this.items = [];
    //     this.items.push({label:'dashboard', path: 'dashboard'});
        // this.items.push({label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'});
    }

}
