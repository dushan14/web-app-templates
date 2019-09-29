import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BasicLayoutModule} from './basic-layout/basic-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
