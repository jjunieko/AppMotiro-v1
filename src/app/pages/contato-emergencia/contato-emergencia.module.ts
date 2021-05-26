import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoEmergenciaPageRoutingModule } from './contato-emergencia-routing.module';

import { ContatoEmergenciaPage } from './contato-emergencia.page';
import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContatoEmergenciaPageRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [ContatoEmergenciaPage, ], 
  
})
export class ContatoEmergenciaPageModule {}
