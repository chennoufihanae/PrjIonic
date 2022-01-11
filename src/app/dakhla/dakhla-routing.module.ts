import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DakhlaPage } from './dakhla.page';

const routes: Routes = [
  {
    path: '',
    component: DakhlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DakhlaPageRoutingModule {}
