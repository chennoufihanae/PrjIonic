import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TangerPage } from './tanger.page';

const routes: Routes = [
  {
    path: '',
    component: TangerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TangerPageRoutingModule {}
