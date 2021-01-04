import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDialogPage } from './chat-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDialogPageRoutingModule {}
