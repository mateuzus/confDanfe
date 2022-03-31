import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanfePageRoutingModule } from './danfe-routing.module';

import { DanfePage } from './danfe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanfePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DanfePage]
})
export class DanfePageModule {}
