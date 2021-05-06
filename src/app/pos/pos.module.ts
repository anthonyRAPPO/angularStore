import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosHomeComponent } from './pos-home/pos-home.component';


@NgModule({
  declarations: [
    PosHomeComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
