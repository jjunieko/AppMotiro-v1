import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMotiroPage } from './chat-motiro.page';

const routes: Routes = [
  {
    path: '',
    component: ChatMotiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatMotiroPageRoutingModule {}
