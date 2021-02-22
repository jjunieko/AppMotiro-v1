import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-preload-chat',
  templateUrl: './preload-chat.page.html',
  styleUrls: ['./preload-chat.page.scss'],
})
export class PreloadChatPage implements OnInit {
  public carregando: any;
  constructor(public loading: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }
  async presentLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: ' Ao clicar no botão "entrar" você será direcionado para o chat do Coletivo Motirõ.',
      duration: 3000
    });
    await loading.present();

  }
  
}
