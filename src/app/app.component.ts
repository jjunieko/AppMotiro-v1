import { Component, ElementRef, ViewChild } from '@angular/core';
/* import {LottieSplashScreen} from '@ionic-native/lottie-splash-screen/ngx'; */
import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'; 

import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  routerHidden =true;
  @ViewChild('splash', {static: false})splash: ElementRef;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    /* private lottieSplashScreen: LottieSplashScreen */
  ) {
    this.initializeApp();
    
  }

 initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      


     setTimeout(() => {
       this.routerHidden = false;
       this.splash.nativeElement.style.display = 'none';
     },5000)

  /*  setTimeout(() => {
      this.lottieSplashScreen.hide();
     }, 2500) */
    });
  } 


 /*  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('YOUR ONESIGNAL APP ID', 'YOUR ANDROID ID');
 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
  }
 
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  } */

}
