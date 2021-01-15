import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-contato-emergencia',
  templateUrl: './contato-emergencia.page.html',
  styleUrls: ['./contato-emergencia.page.scss'],
})
export class ContatoEmergenciaPage implements OnInit {
/* myContacts: Contact[] = []; */


  constructor(/* private contacts: Contact, private callNumber: CallNumber, private sms: SMS, private toastController: ToastController */) { }

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
  

  ngOnInit() {
  }
}





