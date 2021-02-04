import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoOnePageRoutingModule } from './modal-info-one-routing.module';

import { ModalInfoOnePage } from './modal-info-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoOnePageRoutingModule
  ],
  declarations: [ModalInfoOnePage]
})
export class ModalInfoOnePageModule {}
