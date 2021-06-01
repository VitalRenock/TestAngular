import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TofahrenheitPipe } from './pipes/tofahrenheit.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';



@NgModule({
  declarations: [
    TofahrenheitPipe,
    TemperaturePipe
  ],
  
  // Afin d'importer des Modules (pour le partage)
  imports: [
    // Pour le binding Two-ways
    FormsModule
  ],

  // Afin d'exporter des Modules (pour le partage)
  exports: [
    FormsModule,
    TofahrenheitPipe,
    TemperaturePipe
  ]
})
export class SharedModule { }
