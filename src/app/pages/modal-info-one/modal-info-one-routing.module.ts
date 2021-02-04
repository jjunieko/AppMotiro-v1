import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInfoOnePage } from './modal-info-one.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInfoOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInfoOnePageRoutingModule {}
