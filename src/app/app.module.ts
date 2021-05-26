import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
/* import { HttpModule } from "@angular/http"; */
/* import { SMS } from "@ionic-native/sms/ngx";
import { Contacts, Contact, ContactField, ContactName } from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";   */
/* import { FormsModule, ReactiveFormsModule } from "@angular/forms"; */

/* import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore"; */
/* import { AngularFireDatabaseModule } from 'angularfire2/database'; */
/* import { environment } from "../environments/environment"; */

/* import { NgCalendarModule  } from 'ionic2-calendar'; */
import { Calendar } from '@ionic-native/calendar/ngx';

import { Camera } from '@ionic-native/camera/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SMS } from "@ionic-native/sms/ngx";
import { Contact, Contacts} from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";  
import { NgxMaskModule, IConfig } from 'ngx-mask'
/* import {LottieSplashScreen} from '@ionic-native/lottie-splash-screen/ngx'; */
import { Push } from '@ionic-native/push/ngx';
 

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    NgxMaskModule.forRoot(),
   /*  AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule, */
    /* NgCalendarModule, */
    /* LottieSplashScreen */
       

/*     AngularFireDatabaseModule */
  ],

  providers: [
    Camera,
    CameraPreview,
    StatusBar,
    SplashScreen,
    Calendar, 
    SMS,
    Contact,
    Contacts,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Push
/* SMS,
    Contacts,
    CallNumber,
    Contact,
    ContactField,
    ContactName,  */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
