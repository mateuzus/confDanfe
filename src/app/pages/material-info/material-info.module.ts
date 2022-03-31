import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialInfoPageRoutingModule } from './material-info-routing.module';

import { MaterialInfoPage } from './material-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialInfoPageRoutingModule
  ],
  declarations: [MaterialInfoPage]
})
export class MaterialInfoPageModule {}
