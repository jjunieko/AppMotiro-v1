import { Component, OnInit } from "@angular/core";
/* import { SMS } from "@ionic-native/sms/ngx";
import { ToastController } from "@ionic/angular";
import { Contacts, Contact, ContactName, ContactField } from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx"; */

@Component({
  selector: "app-contato-emergencia",
  templateUrl: "./contato-emergencia.page.html",
  styleUrls: ["./contato-emergencia.page.scss"],
})
export class ContatoEmergenciaPage implements OnInit {
  /* myContacts: Contact[] = []; */

  constructor /* private sms: SMS,
    private contacts: Contacts,
    private callNumber: CallNumber,
    private toastCtrl: ToastController */() {}

  /* loadContacts() {
    let options = {
      filter: "",
      multiple: true,
      hasPhoneNumber: true,
    };
    this.contacts.find(["*"], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      console.log("Contacts", contacts);
    });
  }

  sendSMS(contact: Contact) {
    this.sms.send(contact.phoneNumbers[0].value, "preciso de ajuda!!!");
  }

  call(contact: Contact) {
    this.callNumber.callNumber(contact.phoneNumbers[0].value, true);
  }
  createContact() {
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, "albuns", "Ape");
    contact.phoneNumbers = [new ContactField("mobile", "12345678")];
    contact.save().then(
      async () => {
        let toast = await this.toastCtrl.create({
          message: "contato Adicionado",
        });
        toast.present();
      },
      (error: any) => console.log("Erro ao salvar contato", error)
    );
  } */

  ngOnInit() {}
}
