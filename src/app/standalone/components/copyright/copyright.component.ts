import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [CommonModule],
  template: `© {{ year }}`,
})
export class CopyrightComponent {
  @Input({
    transform: (value: string) => '20' + value,
  })
  year: string | undefined;
}
