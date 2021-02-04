import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoEmergenciaPageRoutingModule } from './contato-emergencia-routing.module';

import { ContatoEmergenciaPage } from './contato-emergencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContatoEmergenciaPageRoutingModule
  ],
  declarations: [ContatoEmergenciaPage, ], 
  
})
export class ContatoEmergenciaPageModule {}
