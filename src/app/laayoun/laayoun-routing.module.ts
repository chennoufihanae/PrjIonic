import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaayounPage } from './laayoun.page';

const routes: Routes = [
  {
    path: '',
    component: LaayounPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaayounPageRoutingModule {}
