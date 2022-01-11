import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FesPage } from './fes.page';

const routes: Routes = [
  {
    path: '',
    component: FesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FesPageRoutingModule {}
