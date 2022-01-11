import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarrakechPageRoutingModule } from './marrakech-routing.module';

import { MarrakechPage } from './marrakech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarrakechPageRoutingModule
  ],
  declarations: [MarrakechPage]
})
export class MarrakechPageModule {}
