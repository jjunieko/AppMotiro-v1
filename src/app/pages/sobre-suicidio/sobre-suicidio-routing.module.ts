import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreSuicidioPage } from './sobre-suicidio.page';

const routes: Routes = [
  {
    path: '',
    component: SobreSuicidioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreSuicidioPageRoutingModule {}
