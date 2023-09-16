import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  template: ` Title post {{ id$ | async }}`,
})
export class PostComponent {
  public id$: Observable<string | null>;

  constructor(private route: ActivatedRoute) {
    this.id$ = this.route.paramMap.pipe(map((params) => params.get('id')));
  }
}
