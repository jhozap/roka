import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoFielPageRoutingModule } from './curso-fiel-routing.module';

import { CursoFielPage } from './curso-fiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoFielPageRoutingModule
  ],
  declarations: [CursoFielPage]
})
export class CursoFielPageModule {}
