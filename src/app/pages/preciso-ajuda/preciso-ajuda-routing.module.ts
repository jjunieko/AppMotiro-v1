import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecisoAjudaPage } from './preciso-ajuda.page';

const routes: Routes = [
  {
    path: '',
    component: PrecisoAjudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecisoAjudaPageRoutingModule {}
