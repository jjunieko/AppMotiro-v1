import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase";
import { switchMap, map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { Storage } from "@ionic/storage";

//import { ApiAiClient } from "api-ai-javascript";
//import { BehaviorSubject } from "rxjs";

export interface User {
  uid: string;
  email: string;
}

export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

/* const TOKEN_KEY = "user-acess-token"; */
@Injectable({
  providedIn: "root",
})
/* export class Message {
  constructor(public content: string, public sentBy: string) {}
} */
export class ChatService {
  currentUser: User = null;
  /* user: Observable<any>;
  private authState = new BehaviorSubject(null); */

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private storage: Storage) {
    /* this.user = this.authState.asObservable(); */

    this.afAuth.onAuthStateChanged((user) => {
      if (afAuth !== undefined && afAuth !== null) {
        this.currentUser = user;
      }
    });

    /*   this.getUser().subscribe((a) => {
      this.userName = a.displayName;
    }); */
  }

  async signup({ email, password }): Promise<any> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);

    const uid = credential.user.uid;

    return this.afs.doc(`users/${uid}`).set({
      uid,
      email: credential.user.email,
    });
  }

  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  // TODO Chat functionality
  addChatMessage(msg) {
    return this.afs.collection("messages").add({
      msg: msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  getChatMessages() {
    let users = [];
    return this.getUsers().pipe(
      switchMap((res) => {
        users = res;
        return this.afs
          .collection("messages", (ref) => ref.orderBy("createdAt"))
          .valueChanges({ idField: "id" }) as Observable<Message[]>;
      }),
      map((messages) => {
        // Get the real name for each user
        for (let m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }
        return messages;
      })
    );
  }

  /*   private getUser() {
    const userId = this.getUser.uid;
    const path = `/users/${userId}`;
    return this.afs.collection("users").valueChanges({ idField: "uid" }) as Observable<User[]>;
  } */

  private getUsers() {
    return this.afs.collection("users").valueChanges({ idField: "uid" }) as Observable<User[]>;
  }

  private getUserForMsg(msgFromId, users: User[]): string {
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }

    return "Deleted";
  }

  /* readonly token = environment.dialogFlow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  constructor() {}

  conversation = new BehaviorSubject<Message[]>([]);

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, "user");
    this.update(userMessage);

    return this.client.textRequest(msg).then((res) => {
      const speech = res.result.fulfillment.speech;
      const botMessage = new Message(speech, "bot");

      this.update(botMessage);
    });
  }s

  talk() {
    this.client.textRequest("Como vai você").then((res) => console.log(res));
  } */
}
