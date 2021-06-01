import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [

  // Route par défaut
  { 
    path : '',
    component : DemoComponent,
    children : [
      // Ajout du composant demo1
      { path : 'demo1', component : Demo1Component },
      // Ajout du composant demo2
      { path : 'demo2', component : Demo2Component },
      // Ajout du composant demo3
      { path : 'demo3', component : Demo3Component }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
