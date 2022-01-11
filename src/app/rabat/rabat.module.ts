import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RabatPageRoutingModule } from './rabat-routing.module';

import { RabatPage } from './rabat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RabatPageRoutingModule
  ],
  declarations: [RabatPage]
})
export class RabatPageModule {}
