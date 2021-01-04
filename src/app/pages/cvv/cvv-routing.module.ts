import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvvPage } from './cvv.page';

const routes: Routes = [
  {
    path: '',
    component: CvvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvvPageRoutingModule {}
