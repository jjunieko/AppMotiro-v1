import { Component, Input, OnInit } from "@angular/core";
import {
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform,
  ToastController,
} from "@ionic/angular";
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
    /* public modal: ModalController, */
    public formBuilder: FormBuilder,
    public toastControl: ToastController,
    public loading: LoadingController,
    public fecharModal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public salvarService:ServiceMotiroService
  ) {

    this.form = this.formBuilder.group({
      name: [""],
      contato: [""],
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.id || this.id === 0) {
      await this.editarDadosCovidModal();
      this.isEdit = true;
    }
    console.log(this.id, "meu id editar butão");
  }

  public async submitForm(): Promise<void> {
    console.log(this.form.value, "estou aqui modalhist");
    this.salvarService.salvarDadosCv(this.form.value, this.id);
    this.fecharCard();
  }

  public async editarDadosCovidModal(): Promise<void> {
    const edCovid = await this.salvarService.getCovidForm(this.id);
    console.log(edCovid, "editar covid");
    this.form.patchValue(edCovid);
  }

  fecharCard(): void {
    this.fecharModal.dismiss();
  }
}
