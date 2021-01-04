import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGratidaoPage } from './modal-gratidao.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGratidaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGratidaoPageRoutingModule {}
