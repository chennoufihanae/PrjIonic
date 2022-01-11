import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TangerPageRoutingModule } from './tanger-routing.module';

import { TangerPage } from './tanger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TangerPageRoutingModule
  ],
  declarations: [TangerPage]
})
export class TangerPageModule {}
