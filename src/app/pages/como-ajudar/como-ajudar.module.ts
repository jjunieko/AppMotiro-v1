import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoAjudarPageRoutingModule } from './como-ajudar-routing.module';

import { ComoAjudarPage } from './como-ajudar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoAjudarPageRoutingModule
  ],
  declarations: [ComoAjudarPage]
})
export class ComoAjudarPageModule {}
