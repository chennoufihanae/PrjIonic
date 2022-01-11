import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DakhlaPageRoutingModule } from './dakhla-routing.module';

import { DakhlaPage } from './dakhla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DakhlaPageRoutingModule
  ],
  declarations: [DakhlaPage]
})
export class DakhlaPageModule {}
