import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoSomethingService } from '../../services/do-something.service';
import { TimerComponent } from '../../components/timer/timer.component';
import { CopyrightComponent } from '../../components/copyright/copyright.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TimerComponent, CopyrightComponent],
  template: `<p>
    Home with Standalone Components works!
    <app-timer [value]="time" withSecond />
    <br />
    <app-copyright year="23" />
  </p>`,
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
