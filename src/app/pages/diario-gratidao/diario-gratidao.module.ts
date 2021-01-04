import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DiarioGratidaoPageRoutingModule } from "./diario-gratidao-routing.module";

import { DiarioGratidaoPage } from "./diario-gratidao.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DiarioGratidaoPageRoutingModule, ReactiveFormsModule],
  declarations: [DiarioGratidaoPage],
})
export class DiarioGratidaoPageModule {}
