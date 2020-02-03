import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoFielPage } from './curso-fiel.page';

const routes: Routes = [
  {
    path: '',
    component: CursoFielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoFielPageRoutingModule {}
