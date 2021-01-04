import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioGratidaoPage } from './diario-gratidao.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioGratidaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioGratidaoPageRoutingModule {}
