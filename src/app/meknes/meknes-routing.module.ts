import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeknesPage } from './meknes.page';

const routes: Routes = [
  {
    path: '',
    component: MeknesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeknesPageRoutingModule {}
