import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreAplicativoPage } from './sobre-aplicativo.page';

const routes: Routes = [
  {
    path: '',
    component: SobreAplicativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreAplicativoPageRoutingModule {}
