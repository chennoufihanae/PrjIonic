import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OujdaPageRoutingModule } from './oujda-routing.module';

import { OujdaPage } from './oujda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OujdaPageRoutingModule
  ],
  declarations: [OujdaPage]
})
export class OujdaPageModule {}
