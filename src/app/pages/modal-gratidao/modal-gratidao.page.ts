import { Component, Input, OnInit } from "@angular/core";
import { LoadingController, ModalController, ToastController } from "@ionic/angular";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ServiceMotiroService } from "../../services/service-motiro.service";

@Component({
  selector: "app-modal-gratidao",
  templateUrl: "./modal-gratidao.page.html",
  styleUrls: ["./modal-gratidao.page.scss"],
})
export class ModalGratidaoPage implements OnInit {
  @Input() id: number;

  public isEdit: boolean = false;
  public form: FormGroup;
  public carregar: any;

  constructor(
    public servMotiro: ServiceMotiroService,
    public modal: ModalController,
    public formBuilder: FormBuilder,
    public toastControl: ToastController,
    public loading: LoadingController
  ) {
    this.form = this.formBuilder.group({
      name: [""],
      dataEntrada: [""],
      tiposituacao: [""],
      avaliacao: [""],
      observacoes: [""],
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.id || this.id === 0) {
      await this.editarProntuario();
      this.isEdit = true;

      console.log(this.id, "editação do isEdit");
    }
  }

  public async editarProntuario(): Promise<void> {
    await this.showCarregar();
    const editarPront = await this.servMotiro.getAll();
    console.log(editarPront, "saber minha edição");
    this.form.patchValue(editarPront);
    await this.fecharCarregando();
  }

  async showMensagem(): Promise<void> {
    let message: string = "Perfil atualizado com Sucesso";
    if (this.isEdit) {
      message = "Perfil atualizado com sucesso";
    } else {
      alert("erro ao atualizar perfil");
    }
    const toast = await this.toastControl.create({
      message: message,
      duration: 2000,
      color: "success",
    });

    toast.present();
  }

  public fecharModal(): void {
    this.modal.dismiss();
  }

  public async submitForm(): Promise<void> {
    await this.showCarregar();
    //console.log(this.form.value);
    this.servMotiro.salvarProntuarioPerfil(this.form.value, this.id);
    await this.fecharCarregando();
    this.fecharModal();
    this.showMensagem();
  }

  async showCarregar(): Promise<void> {
    this.carregar = await this.loading.create({
      message: "Aguarde...",
    });
    await this.carregar.present();
  }
  async fecharCarregando(): Promise<void> {
    await this.carregar.dismiss();
  }
}
