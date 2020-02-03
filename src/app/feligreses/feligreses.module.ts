import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeligresesPageRoutingModule } from './feligreses-routing.module';

import { FeligresesPage } from './feligreses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeligresesPageRoutingModule
  ],
  declarations: [FeligresesPage]
})
export class FeligresesPageModule {}
