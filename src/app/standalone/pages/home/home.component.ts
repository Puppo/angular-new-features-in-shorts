import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoSomethingService } from '../../services/do-something.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template:
    '<p>Home with Standalone Components works! {{ time | date : "mediumTime" }}</p>',
})
export class HomeComponent implements OnInit {
  protected doSomethingSv: DoSomethingService = inject(DoSomethingService);
  protected destroyRef: DestroyRef = inject(DestroyRef);

  public time = new Date();

  constructor() {
    const id = setInterval(() => {
      console.log('setInterval');
      this.time = new Date();
    }, 300);
    this.destroyRef.onDestroy(() => {
      clearInterval(id);
    });
  }

  ngOnInit() {
    this.doSomethingSv.doSomething();
  }
}

export default HomeComponent;
