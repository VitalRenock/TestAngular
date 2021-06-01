import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ChronoComponent } from './components/chrono/chrono.component';


@NgModule({
  declarations: [
    ChronoComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule
  ]
})
export class ExercicesModule { }
