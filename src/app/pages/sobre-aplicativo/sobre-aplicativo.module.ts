import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreAplicativoPageRoutingModule } from './sobre-aplicativo-routing.module';

import { SobreAplicativoPage } from './sobre-aplicativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreAplicativoPageRoutingModule
  ],
  declarations: [SobreAplicativoPage]
})
export class SobreAplicativoPageModule {}
