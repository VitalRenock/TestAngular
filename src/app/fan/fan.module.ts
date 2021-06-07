import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanRoutingModule } from './fan-routing.module';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListingComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    FanRoutingModule,
    // Import du module partagé
    SharedModule
  ]
})
export class FanModule { }
