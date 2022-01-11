import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerzougaPage } from './merzouga.page';

const routes: Routes = [
  {
    path: '',
    component: MerzougaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerzougaPageRoutingModule {}
