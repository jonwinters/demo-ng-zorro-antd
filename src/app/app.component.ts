import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nz-root>
      <router-outlet></router-outlet>
    </nz-root>`,
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}

