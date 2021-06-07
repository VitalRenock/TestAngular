import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DetailsComponent } from './components/details/details.component';
import { ListingComponent } from './components/listing/listing.component';
import { UpdateComponent } from './components/update/update.component';

// Déclaration des routes
const routes: Routes = [
  {
    path : '',
    children : [
      { path : 'listing', component: ListingComponent },
      { path : 'details', component: DetailsComponent },
      { path : 'create', component: CreateComponent },
      { path : 'update', component: UpdateComponent },
      { path : 'delete', component: DeleteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanRoutingModule { }
