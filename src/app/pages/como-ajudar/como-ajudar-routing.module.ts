import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoAjudarPage } from './como-ajudar.page';

const routes: Routes = [
  {
    path: '',
    component: ComoAjudarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoAjudarPageRoutingModule {}
