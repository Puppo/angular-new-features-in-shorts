import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
