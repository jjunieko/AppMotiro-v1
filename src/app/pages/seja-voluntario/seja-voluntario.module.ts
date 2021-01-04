import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SejaVoluntarioPageRoutingModule } from './seja-voluntario-routing.module';

import { SejaVoluntarioPage } from './seja-voluntario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SejaVoluntarioPageRoutingModule
  ],
  declarations: [SejaVoluntarioPage]
})
export class SejaVoluntarioPageModule {}
