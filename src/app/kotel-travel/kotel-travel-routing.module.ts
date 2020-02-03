import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KotelTravelPage } from './kotel-travel.page';

const routes: Routes = [
  {
    path: '',
    component: KotelTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KotelTravelPageRoutingModule {}
