import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;

  constructor() {
    if(environment.production) {
      this.title = "hello PROD";
    } else {
      this.title = "hello DEV";
    }
  }
}
