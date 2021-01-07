import { Component, OnInit } from "@angular/core";
import { TestServ } from "../../../app/pages/models/testeserv";

@Component({
  selector: "app-chat-dialog",
  templateUrl: "./chat-dialog.page.html",
  styleUrls: ["./chat-dialog.page.scss"],
})
export class ChatDialogPage implements OnInit {
  id: number;
  chats: Array<TestServ> = [];

  constructor() {}

  ngOnInit() {}

  /*   buscarZenvia() {
    this.authServ.getZenvia(this.id).subscribe((res) => {
      this.chats = res.dados;
    });
  } */
}
