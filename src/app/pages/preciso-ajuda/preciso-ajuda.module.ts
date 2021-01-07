import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrecisoAjudaPageRoutingModule } from './preciso-ajuda-routing.module';

import { PrecisoAjudaPage } from './preciso-ajuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecisoAjudaPageRoutingModule
  ],
  declarations: [PrecisoAjudaPage]
})
export class PrecisoAjudaPageModule {}
