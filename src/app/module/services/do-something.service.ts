import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoSomethingService {
  doSomething(): void {
    console.log('do something');
  }
}
