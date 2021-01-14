import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, ToastController } from "@ionic/angular";

@Component({
  selector: "app-chat-dialog",
  templateUrl: "./chat-dialog.page.html",
  styleUrls: ["./chat-dialog.page.scss"],
})
export class ChatDialogPage implements OnInit {
  

  constructor(private db: AngularFireDatabase) {
  }

  

  ngOnInit() {}

 
}
