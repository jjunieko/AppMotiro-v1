import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoacoesPageRoutingModule } from './doacoes-routing.module';

import { DoacoesPage } from './doacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoacoesPageRoutingModule
  ],
  declarations: [DoacoesPage]
})
export class DoacoesPageModule {}
