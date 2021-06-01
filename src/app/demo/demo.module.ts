import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { SharedModule } from '../shared/shared.module';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
  ],

  // Importation des Modules
  imports: [
    CommonModule,
    DemoRoutingModule,
    // Module partagé
    SharedModule
  ],
  bootstrap : [
    DemoComponent
  ]
})
export class DemoModule { }
