import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoSomethingService } from '../../services/do-something.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: '<p>Home with Standalone Components works!</p>',
})
export class HomeComponent implements OnInit {
  protected doSomethingSv: DoSomethingService = inject(DoSomethingService);

  ngOnInit() {
    this.doSomethingSv.doSomething();
  }
}

export default HomeComponent;
