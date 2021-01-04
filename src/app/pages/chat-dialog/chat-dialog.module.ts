import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChatDialogPageRoutingModule } from "./chat-dialog-routing.module";

import { ChatDialogPage } from "./chat-dialog.page";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, ChatDialogPageRoutingModule],
  declarations: [ChatDialogPage],
})
export class ChatDialogPageModule {}
