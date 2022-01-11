import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeknesPageRoutingModule } from './meknes-routing.module';

import { MeknesPage } from './meknes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeknesPageRoutingModule
  ],
  declarations: [MeknesPage]
})
export class MeknesPageModule {}
