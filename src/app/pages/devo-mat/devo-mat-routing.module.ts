import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevoMatPage } from './devo-mat.page';

const routes: Routes = [
  {
    path: '',
    component: DevoMatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevoMatPageRoutingModule {}
