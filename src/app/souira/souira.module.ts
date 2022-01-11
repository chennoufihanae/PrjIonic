import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouiraPageRoutingModule } from './souira-routing.module';

import { SouiraPage } from './souira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouiraPageRoutingModule
  ],
  declarations: [SouiraPage]
})
export class SouiraPageModule {}
