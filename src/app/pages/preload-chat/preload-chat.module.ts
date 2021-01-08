import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreloadChatPageRoutingModule } from './preload-chat-routing.module';

import { PreloadChatPage } from './preload-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreloadChatPageRoutingModule
  ],
  declarations: [PreloadChatPage]
})
export class PreloadChatPageModule {}
