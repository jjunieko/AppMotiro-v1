import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SejaVoluntarioPage } from './seja-voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: SejaVoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SejaVoluntarioPageRoutingModule {}
