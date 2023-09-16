import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  template: `{{ time | date : (withSecond ? 'medium' : 'short') }}`,
})
export class TimerComponent {
  @Input({
    alias: 'value',
    required: true,
  })
  time!: Date;

  @Input({
    transform: booleanAttribute,
  })
  withSecond: boolean = false;
}
