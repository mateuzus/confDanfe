import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevoMatPageRoutingModule } from './devo-mat-routing.module';

import { DevoMatPage } from './devo-mat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevoMatPageRoutingModule
  ],
  declarations: [DevoMatPage]
})
export class DevoMatPageModule {}
