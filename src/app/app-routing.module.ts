import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FourOFourComponent } from './shared/four-o-four/four-o-four.component';

const routes: Routes = [

  // Route par défaut
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },
  { path : 'about', component : AboutComponent },

  // Pour importer un module en Lazy loading
  { path : 'demo', loadChildren : () => import('./demo/demo.module').then(m => m.DemoModule) },

  // Ajout du module Exercices
  { path : 'exercices', loadChildren : () => import('./exercices/exercices.module').then(m => m.ExercicesModule) },

  // Gestion des erreurs
  { path : '404', component : FourOFourComponent },
  { path : '**', redirectTo : '404', pathMatch : 'full' }

];

@NgModule({
  // forRoot: indique la racine du projet
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
