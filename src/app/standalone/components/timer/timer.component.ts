import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  template: `{{ time | date : 'medium' }}`,
})
export class TimerComponent {
  @Input({
    alias: 'value',
    required: true,
  })
  time!: Date;
}
