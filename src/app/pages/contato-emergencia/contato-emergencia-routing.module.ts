import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoEmergenciaPage } from './contato-emergencia.page';

const routes: Routes = [
  {
    path: '',
    component: ContatoEmergenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatoEmergenciaPageRoutingModule {}
