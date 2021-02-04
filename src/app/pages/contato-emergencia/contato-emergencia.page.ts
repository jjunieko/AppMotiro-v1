import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  NavController,
  NavParams,
  Platform,
  ToastController,
} from "@ionic/angular";
/* import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Calendar } from '@ionic-native/calendar/ngx'; */
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ServiceMotiroService } from "src/app/services/service-motiro.service";
import { ModalGratidaoPage } from "../modal-gratidao/modal-gratidao.page";
import { PerfilUser } from "../models/perfilUser";

/* import { MbscEventcalendarOptions, Notifications, localePtBR } from '@mobiscroll/angular'; */

@Component({
  selector: "app-contato-emergencia",
  templateUrl: "./contato-emergencia.page.html",
  styleUrls: ["./contato-emergencia.page.scss"],
  providers: [NavParams],
})
export class ContatoEmergenciaPage implements OnInit {
  public salvarItens: Array<PerfilUser> = [];
  /* calendars = []; 
  myContacts: Contact[] = [];  */

  constructor(
    public salvarService: ServiceMotiroService,
    public modal: ModalController,
    /* private contacts: Contact, private callNumber: CallNumber, private sms: SMS */ private toastController: ToastController,
    public navCtrl: NavController,
    /* private calendar: Calendar, */ private plt: Platform,
    public navParams: NavParams,
    private router: Router,
    private http: HttpClient,
  /*   public serviceMotiro: ServiceMotiroService, */
    /* public modalGratidaoPage: ModalGratidaoPage */
  ) {
    /*   this.plt.ready().then(() => {
        this.calendar.listCalendars().then(data => {
          this.calendars = data;
        });
      })  */
  }

  async ngOnInit(): Promise<void> {
    this.getCovidForm();
  }

  async abrirModalCovid() {
    const modal = await this.modal.create({
      component: ModalGratidaoPage,
    });
    modal.onDidDismiss().then(async () => {
      await this.getCovidForm();
    });
    return await modal.present();
  }

  async editarDadosCovidVindoDaModal(id: number): Promise<void> {
    const modal = await this.modal.create({
      component: ModalGratidaoPage,
      componentProps: {
        id,
      },
    });
    modal.onDidDismiss().then(async () => {
      await this.getCovidForm();
    });
    return await modal.present();
  }

  async delete(key) {
    await this.salvarService.delete(key);
    await this.getCovidForm();
  }

  public async getCovidForm(): Promise<void> {
    setTimeout(async () => {
      console.log(this.salvarItens, "aqui teste");
      this.salvarItens = await this.salvarService.getListarTodos();
      console.log(this.salvarItens, "vamos chegar aqui ");
    }, 2000);
  }
}

/* 
     addEvent(cal) {
      
      let date = new Date();
    
      let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15 };
  
   
      this.calendar.createEventInteractivelyWithOptions('My new Event', 'Münster', 'Special Notes', date, date, options).then(res => {
      }, err => {
        console.log('err: ', err);
      });


    } */

/*  openCal(cal) {

      this.router.navigate(["seja-voluntario"], { queryParams: { name: cal.name}})
    } */
/*    openCal(cal) {
      this.navCtrl.setDirection(['ContatoEmergenciaPage',{ name: cal.name })
    }    */

/*   openCal(cal) {
      this.navCtrl.push('seja-voluntario', { name: cal.name })
    }   */

/* loadContacts() {
 let options ={
      filter: '',
      multiple: true,
      hasPhoneNumber: true,

 };
 this.contacts.find(['*'], options).then((contacts: Contact[])=>{
   this.myContacts = contacts;
   console.log('Contacts: ', contacts)
 });

  }

  sendSMS(contact: Contact) {
    this.sms.send(contact.phoneNumbers[0].value, 'this message')
  }
  call(contact: Contact){
    this.callNumber.callNumber(contact.phoneNumbers[0].value, true);
  }

createContact() {
  let Contact: Contact = this.contacts.create();

  Contact.name = new ContactName(null, 'Albuns', 'Ape');
  Contact.phoneNumbers = [ new ContactField( 'mobile', '12345678')];
  Contact.save().then( async () => {
    let toast = await this.toastController.create({
      message: 'Contato Adicionado'
    })
    toast.present();
  },
  (error: any) => console.error("error ao salvar o contato. ", error)
  );
  
} */
