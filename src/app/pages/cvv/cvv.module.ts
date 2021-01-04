import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvvPageRoutingModule } from './cvv-routing.module';

import { CvvPage } from './cvv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvvPageRoutingModule
  ],
  declarations: [CvvPage]
})
export class CvvPageModule {}
