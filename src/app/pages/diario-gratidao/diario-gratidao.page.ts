import { Component, OnInit } from "@angular/core";
import { ActionSheetController, LoadingController, ModalController } from "@ionic/angular";
import { ServiceMotiroService } from "../../services/service-motiro.service";
import { PerfilUser } from "../models/perfilUser";
import { ModalGratidaoPage } from "../modal-gratidao/modal-gratidao.page";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-diario-gratidao",
  templateUrl: "./diario-gratidao.page.html",
  styleUrls: ["./diario-gratidao.page.scss"],
})
export class DiarioGratidaoPage implements OnInit {
  public perfilUser: Array<PerfilUser> = [];
  public carregar: any;

  constructor(
    public modalController: ModalController,
    public laoding: LoadingController,
    public servMotiro: ServiceMotiroService,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  async showCarregar(): Promise<void> {
    this.carregar = await this.laoding.create({
      message: "Aguarde, processando",
    });
    await this.carregar.present();
  }

  public async getPerfil() {
    await this.showCarregar();
    setTimeout(async () => {
      this.perfilUser = await this.servMotiro.getAll();
      //console.log(this.comidas);
      await this.fecharCarregando();
    }, 2000);
  }

  async fecharCarregando(): Promise<void> {
    await this.carregar.dismiss();
  }

  async abrirModalPerfil() {
    const modal = await this.modalController.create({
      component: ModalGratidaoPage,
      cssClass: "my-custom-class",
    });
    modal.onDidDismiss().then(async () => {
      await this.getPerfil();
    });
    return await modal.present();
  }

  async editarPerfilUser(id: number): Promise<void> {
    await this.showCarregar();
    const modal = await this.modalController.create({
      component: ModalGratidaoPage,
      componentProps: {
        id,
      },
    });
    modal.onDidDismiss().then(async () => {
      await this.getPerfil();
    });

    await this.fecharCarregando();
    return await modal.present();
  }

  public async remover(id: number): Promise<void> {
    await this.servMotiro.removerItem(id);
    this.getPerfil();
  }

  async actionSheetDelete(id: number) {
    const actionSheet = await this.actionSheetController.create({
      header: "tem certeza que deseja deletar ?",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "sim",
          role: "destructive",
          icon: "trash",
          handler: async (): Promise<void> => {
            await this.remover(id);
          },
          //console.log("delete clicked");
        },
        {
          text: "cancelar",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("cancel cliked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
