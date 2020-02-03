import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KotelTravelPageRoutingModule } from './kotel-travel-routing.module';

import { KotelTravelPage } from './kotel-travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KotelTravelPageRoutingModule
  ],
  declarations: [KotelTravelPage]
})
export class KotelTravelPageModule {}
