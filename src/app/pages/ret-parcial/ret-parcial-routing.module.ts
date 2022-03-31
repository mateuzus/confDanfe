import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetParcialPage } from './ret-parcial.page';

const routes: Routes = [
  {
    path: '',
    component: RetParcialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetParcialPageRoutingModule {}
