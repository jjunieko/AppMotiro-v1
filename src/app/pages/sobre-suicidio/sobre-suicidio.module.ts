import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreSuicidioPageRoutingModule } from './sobre-suicidio-routing.module';

import { SobreSuicidioPage } from './sobre-suicidio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreSuicidioPageRoutingModule
  ],
  declarations: [SobreSuicidioPage]
})
export class SobreSuicidioPageModule {}
