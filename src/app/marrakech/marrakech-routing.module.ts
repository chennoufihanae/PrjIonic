import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarrakechPage } from './marrakech.page';

const routes: Routes = [
  {
    path: '',
    component: MarrakechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarrakechPageRoutingModule {}
