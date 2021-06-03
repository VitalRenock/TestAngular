import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ChronoComponent } from './components/chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ListeComponent } from './components/shopping/liste/liste.component';
import { Shopping2Component } from './components/shopping2/shopping2.component';


@NgModule({
  declarations: [
    ChronoComponent,
    ShoppingComponent,
    ListeComponent,
    Shopping2Component
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    SharedModule
  ]
})
export class ExercicesModule { }
