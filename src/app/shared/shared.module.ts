import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TofahrenheitPipe } from './pipes/tofahrenheit.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { SurligneurDirective } from './directives/surligneur.directive';



@NgModule({
  declarations: [
    TofahrenheitPipe,
    TemperaturePipe,
    SurligneurDirective
  ],
  
  // Afin d'importer des Modules (pour le partage)
  imports: [
    // Pour le binding Two-ways
    FormsModule,
    ReactiveFormsModule
  ],

  // Afin d'exporter des Modules (pour le partage)
  exports: [
    FormsModule,
    TofahrenheitPipe,
    TemperaturePipe,
    SurligneurDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
