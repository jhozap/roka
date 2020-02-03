import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeligresesPage } from './feligreses.page';

const routes: Routes = [
  {
    path: '',
    component: FeligresesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeligresesPageRoutingModule {}
