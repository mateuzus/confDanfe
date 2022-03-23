import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanfePage } from './danfe.page';

const routes: Routes = [
  {
    path: '',
    component: DanfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanfePageRoutingModule {}
