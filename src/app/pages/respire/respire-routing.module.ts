import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespirePage } from './respire.page';

const routes: Routes = [
  {
    path: '',
    component: RespirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespirePageRoutingModule {}
