import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouiraPage } from './souira.page';

const routes: Routes = [
  {
    path: '',
    component: SouiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouiraPageRoutingModule {}
