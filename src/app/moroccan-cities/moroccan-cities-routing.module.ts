import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoroccanCitiesPage } from './moroccan-cities.page';

const routes: Routes = [
  {
    path: '',
    component: MoroccanCitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoroccanCitiesPageRoutingModule {}
