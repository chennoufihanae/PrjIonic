import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoroccanCitiesPageRoutingModule } from './moroccan-cities-routing.module';

import { MoroccanCitiesPage } from './moroccan-cities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoroccanCitiesPageRoutingModule
  ],
  declarations: [MoroccanCitiesPage]
})
export class MoroccanCitiesPageModule {}
