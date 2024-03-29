import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespirePageRoutingModule } from './respire-routing.module';

import { RespirePage } from './respire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespirePageRoutingModule
  ],
  declarations: [RespirePage]
})
export class RespirePageModule {}
