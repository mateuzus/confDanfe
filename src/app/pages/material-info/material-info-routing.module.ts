import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialInfoPage } from './material-info.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialInfoPageRoutingModule {}
