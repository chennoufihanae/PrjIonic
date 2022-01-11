import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FesPageRoutingModule } from './fes-routing.module';

import { FesPage } from './fes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FesPageRoutingModule
  ],
  declarations: [FesPage]
})
export class FesPageModule {}
