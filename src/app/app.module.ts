import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";

import { Calendar } from "@ionic-native/calendar/ngx";

import { Camera } from "@ionic-native/camera/ngx";
import { CameraPreview } from "@ionic-native/camera-preview/ngx";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SMS } from "@ionic-native/sms/ngx";
import { Contact, Contacts } from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";

import { Push } from "@ionic-native/push/ngx";

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
    Push,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
