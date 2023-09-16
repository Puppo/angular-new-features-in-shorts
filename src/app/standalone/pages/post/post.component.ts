import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  template: `Title post {{ id }}`,
})
export default class PostComponent {
  @Input() public id: string | null = null;
}
