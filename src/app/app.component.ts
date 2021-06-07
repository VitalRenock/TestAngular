import { Component } from '@angular/core';
import { Link } from './shared/models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestAngular';

  mesLinksEnvoye : Link[] = [
    { url: '/home', title: 'Home' },
    { url: '/about', title: 'About' },
    { title: 'Demos', children: 
    [
      { url: '/demo/demo1', title : 'Demo 1 - Bindings' },
      { url: '/demo/demo2', title : 'Demo 2 - Event Bindings' },
      { url: '/demo/demo3', title : 'Demo 3 - Pipes' },
      { url: '/demo/demo4', title : 'Demo 4 - Component Bindings' },
      { url: '/demo/demo5', title : 'Demo 5 - Structural Bindings' },
      { url: '/demo/demo6', title : 'Demo 6 - @Input et @Ouput' },
      { url: '/demo/demo7', title : 'Demo 7 - Service et injection' },
      { url: '/demo/demo8', title : 'Demo 8 - Formulaires' },
      { url: '/demo/demo9', title : 'Demo 9 - Routing' },
      { url: '/demo/demo10', title : 'Demo 10 - Guard' },
      { url: '/demo/demo11', title : 'Demo 11 - Resolver' },
    ] },
    { title: 'Exercices', children :
    [
      { url: '/exercices/chrono', title: 'Chronomètre'},
      { url: '/exercices/shopping', title: 'Shopping List'},
      { url: '/exercices/shopping2', title: 'Shopping List 2'}
    ] },
    { title: 'Module Fan', children :
    [
      { url: '/fan/listing', title: 'Listing'},
      { url: '/fan/details', title: 'Details'},
      { url: '/fan/create', title: 'Create'},
      { url: '/fan/update', title: 'Update'},
      { url: '/fan/delete', title: 'Delete'}
    ] }
  ]
}
