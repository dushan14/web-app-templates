import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout.component';

@NgModule({
  declarations: [BasicLayoutComponent],
  exports: [
    BasicLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicLayoutModule { }
