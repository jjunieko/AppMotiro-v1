import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalGratidaoPageRoutingModule } from "./modal-gratidao-routing.module";

import { ModalGratidaoPage } from "./modal-gratidao.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ModalGratidaoPageRoutingModule, ReactiveFormsModule],
  declarations: [ModalGratidaoPage],
})
export class ModalGratidaoPageModule {}
