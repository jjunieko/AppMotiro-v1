import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChatMotiroPageRoutingModule } from "./chat-motiro-routing.module";

import { ChatMotiroPage } from "./chat-motiro.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ChatMotiroPageRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [ChatMotiroPage],
})
export class ChatMotiroPageModule {}
