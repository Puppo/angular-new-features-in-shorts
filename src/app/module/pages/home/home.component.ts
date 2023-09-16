import { Component, OnInit } from '@angular/core';
import { DoSomethingService } from '../../services/do-something.service';

@Component({
  selector: 'app-home',
  template: `<p>Home with Module works!</p>`,
})
export class HomeComponent implements OnInit {
  constructor(protected doSomethingSv: DoSomethingService) {}

  ngOnInit() {
    this.doSomethingSv.doSomething();
  }
}
