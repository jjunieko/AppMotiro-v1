import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DoacoesPage } from "./doacoes.page";

const routes: Routes = [
  {
    path: "",
    component: DoacoesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoacoesPageRoutingModule {}
