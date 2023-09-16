import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>

    <app-home></app-home> `,
})
export class AppComponent {
  title = 'angular-new-features-in-shorts';
}
