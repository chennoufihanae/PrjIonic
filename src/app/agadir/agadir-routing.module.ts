import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgadirPage } from './agadir.page';

const routes: Routes = [
  {
    path: '',
    component: AgadirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgadirPageRoutingModule {}
