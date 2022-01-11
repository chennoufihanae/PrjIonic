import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaayounPageRoutingModule } from './laayoun-routing.module';

import { LaayounPage } from './laayoun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaayounPageRoutingModule
  ],
  declarations: [LaayounPage]
})
export class LaayounPageModule {}
