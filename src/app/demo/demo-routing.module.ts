import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { AuthguardGuard } from './components/demo10/authguard.guard';
import { Demo10Component } from './components/demo10/demo10.component';
import { Demo11Component } from './components/demo11/demo11.component';
import { ObjectResolverResolver } from './components/demo11/object-resolver.resolver';
import { ResolvedComponent } from './components/demo11/resolved/resolved.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { Demo5Component } from './components/demo5/demo5.component';
import { Demo6Component } from './components/demo6/demo6.component';
import { Demo7Component } from './components/demo7/demo7.component';
import { Demo8Component } from './components/demo8/demo8.component';
import { CibleComponent } from './components/demo9/cible/cible.component';
import { Demo9Component } from './components/demo9/demo9.component';
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
      { path : 'demo3', component : Demo3Component },
      // Ajout du composant demo4
      { path : 'demo4', component : Demo4Component },
      // Ajout du composant demo5
      { path : 'demo5', component : Demo5Component },
      // Ajout du composant demo6
      { path : 'demo6', component : Demo6Component },
      // Ajout du composant demo7
      { path : 'demo7', component : Demo7Component },
      // Ajout du composant demo8
      { path : 'demo8', component : Demo8Component },
      // Ajout du composant demo9
      { path : 'demo9', component : Demo9Component },
          // Ajout du composant Cible
          { path : 'cible/:param', component : CibleComponent },
      // Ajout du composant demo10
      { path : 'demo10', canActivate: [AuthguardGuard], component : Demo10Component },
      { path : 'demo11', component : Demo11Component },
      { path : 'resolved/:index', resolve: {monObjet : ObjectResolverResolver}, component : ResolvedComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
