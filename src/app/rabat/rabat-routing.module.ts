import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RabatPage } from './rabat.page';

const routes: Routes = [
  {
    path: '',
    component: RabatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RabatPageRoutingModule {}
