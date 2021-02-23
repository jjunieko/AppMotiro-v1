import { Component, OnInit } from "@angular/core";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { SMS } from "@ionic-native/sms/ngx";
import { NavController, ToastController } from "@ionic/angular";
import { Contact, Contacts, ContactName, ContactField } from "@ionic-native/contacts/ngx";

@Component({
  selector: "app-doacoes",
  templateUrl: "./doacoes.page.html",
  styleUrls: ["./doacoes.page.scss"],
})
export class DoacoesPage implements OnInit {
  myContacts: Contact[] = [];

  /* splash = true; */

  constructor(
    public navCtrl: NavController,
    private contact: Contact,
    private contacts: Contacts,
    private callNumber: CallNumber,
    private sms: SMS,
    private toastController: ToastController
  ) {}
  /*  
ionViewDidLoad() {
   setTimeout(() =>this.splash=false, 4000);
} */



/* transferir função de contato para contato de emergencia, quando der certo no simulador!!!!!! */

  loadContacts() {
    let options = {
      filter: "",
      multiple: true,
      hasPhoneNumber: true,
    };

    this.contact.find(["*"], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      console.log("Contacts: ", contacts);
    });
  }

  sendSMS(contact: Contact) {
    this.sms.send(contact.phoneNumbers[0].value, "this message");
  }
  call(contact: Contact) {
    this.callNumber.callNumber(contact.phoneNumbers[0].value, true);
  }

  async createContact() {
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName (null, "Albuns", "Ape");
    contact.phoneNumbers = [new ContactField("mobile", "12345678")];
    contact.save().then(
      async () => {
        let toast = await this.toastController.create({
          message: "Contato Adicionado",
        });
        toast.present();
      },
      (error: any) => console.error("error ao salvar o contato. ", error)
    );
  }

  ngOnInit() {}
}
