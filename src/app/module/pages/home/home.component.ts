import { Component, OnDestroy, OnInit } from '@angular/core';
import { DoSomethingService } from '../../services/do-something.service';

@Component({
  selector: 'app-home',
  template: `<p>Home with Module works! {{ time | date : 'mediumTime' }}</p>`,
})
export class HomeComponent implements OnInit, OnDestroy {
  protected intervalId: ReturnType<typeof setInterval>;
  public time = new Date();

  constructor(protected doSomethingSv: DoSomethingService) {
    this.intervalId = setInterval(() => {
      console.log('setInterval');
      this.time = new Date();
    }, 300);
  }

  ngOnInit() {
    this.doSomethingSv.doSomething();
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
    clearInterval(this.intervalId);
  }
}
