import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetParcialPageRoutingModule } from './ret-parcial-routing.module';

import { RetParcialPage } from './ret-parcial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetParcialPageRoutingModule
  ],
  declarations: [RetParcialPage]
})
export class RetParcialPageModule {}
