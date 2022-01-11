import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgadirPageRoutingModule } from './agadir-routing.module';

import { AgadirPage } from './agadir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgadirPageRoutingModule
  ],
  declarations: [AgadirPage]
})
export class AgadirPageModule {}
