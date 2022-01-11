import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerzougaPageRoutingModule } from './merzouga-routing.module';

import { MerzougaPage } from './merzouga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerzougaPageRoutingModule
  ],
  declarations: [MerzougaPage]
})
export class MerzougaPageModule {}
