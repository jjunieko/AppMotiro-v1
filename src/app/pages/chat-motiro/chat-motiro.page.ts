import { Component, OnInit, ViewChild } from "@angular/core";
import { ChatService, Message } from "../../services/chat.service";
import { IonContent } from "@ionic/angular";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
//import { scan } from "rxjs/operators";

@Component({
  selector: "app-chat-motiro",
  templateUrl: "./chat-motiro.page.html",
  styleUrls: ["./chat-motiro.page.scss"],
})
export class ChatMotiroPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  messages: Observable<any[]>;
  newMsg = "";
  usuario: any;
  /* messages: Observable<Message[]>;
  formValue: string; */

  constructor(private chatService: ChatService, private router: Router, private afAuth: AngularFireAuth) {}
  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
    /* this.chat.talk(); */
    /* this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val))); */
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe((usr) => {
      this.usuario = usr;
    });
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = "";
      this.content.scrollToBottom();
    });
  }

  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl("/", { replaceUrl: true });
    });
  }
  /* sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = "";
  } */
}
