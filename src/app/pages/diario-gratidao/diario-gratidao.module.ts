import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DiarioGratidaoPageRoutingModule } from "./diario-gratidao-routing.module";

import { DiarioGratidaoPage } from "./diario-gratidao.page";
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DiarioGratidaoPageRoutingModule, ReactiveFormsModule, NgCalendarModule  ],
  declarations: [DiarioGratidaoPage],
})
export class DiarioGratidaoPageModule {}
