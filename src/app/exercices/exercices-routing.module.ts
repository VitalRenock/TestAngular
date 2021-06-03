import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { Shopping2Component } from './components/shopping2/shopping2.component';

// Déclaration des routes
const routes: Routes = [
  {
    path : '',
    children : [
      { path : 'chrono', component: ChronoComponent },
      { path : 'shopping', component: ShoppingComponent },
      { path : 'shopping2', component: Shopping2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
