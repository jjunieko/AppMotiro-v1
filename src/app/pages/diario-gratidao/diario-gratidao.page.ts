import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Inject,
  LOCALE_ID,
} from "@angular/core";
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { ServiceMotiroService } from "../../services/service-motiro.service";
import { PerfilUser } from "../models/perfilUser";
import { ModalGratidaoPage } from "../modal-gratidao/modal-gratidao.page";
import { AngularFirestore } from "@angular/fire/firestore";
import { CalendarComponent } from "ionic2-calendar";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-diario-gratidao",
  templateUrl: "./diario-gratidao.page.html",
  styleUrls: ["./diario-gratidao.page.scss"],
})
export class DiarioGratidaoPage implements OnInit {
  public perfilUser: Array<PerfilUser> = [];
  public carregar: any;

  event = {
    title: "",
    desc: "",
    startTime: "",
    endTime: "",
    allDay: false,
  };

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: "month",
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  /*  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date(); */

  constructor(
    public modalController: ModalController,
    public laoding: LoadingController,
    public servMotiro: ServiceMotiroService,
    public actionSheetController: ActionSheetController,
    private db: AngularFirestore,
   /*  private navController: NavController,
    private alertCtrl: AlertController, */
    @Inject(LOCALE_ID) private locale: string,
   
  ) {
/*     this.db
      .collection(`events`)
      .snapshotChanges()
      .subscribe((colSnap) => {
        this.eventSource = [];
        colSnap.forEach((snap) => {
          const event: any = snap.payload.doc.data();
          event.id = snap.payload.doc.id;
          event.startTime = event.startTime.toDate();
          event.endTime = event.endTime.toDate();
          console.log(event);
          this.eventSource.push(event);
        });
      }); */
  }

  ngOnInit() {}

  async showCarregar(): Promise<void> {
    this.carregar = await this.laoding.create({
      message: "Aguarde, processando",
    });
    await this.carregar.present();
  }

  /* public async getPerfil() {
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

  //calendario

  resetEvent() {
    this.event = {
      title: "",
      desc: "",
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false,
    };
  } */

  // Create the right event format and reload source
  /* addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc,
    };

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(
        Date.UTC(
          start.getUTCFullYear(),
          start.getUTCMonth(),
          start.getUTCDate()
        )
      );
      eventCopy.endTime = new Date(
        Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1)
      );
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }
  // Change current month/week/day
  next() {
    var swiper = document.querySelector(".swiper-container")["swiper"];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector(".swiper-container")["swiper"];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, "medium", this.locale);
    let end = formatDate(event.endTime, "medium", this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: "From: " + start + "<br><br>To: " + end,
      buttons: ["OK"],
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = selected.toISOString();
  } */

  /* addNewEvent() {
    let start = this.selectedDate;
    let end = this.selectedDate;
    end.setMinutes(end.getMinutes() + 60);

    let event = {
      title: 'Event #' + start.getMinutes(),
      startTime: start,
      endTime: end,
      allDay: false,
    };

    this.db.collection(`events`).add(event);
  }

  onViewTitleChanged(title) {
    console.log(title);
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
 */
}
