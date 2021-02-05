import { Component, ElementRef, ViewChild } from '@angular/core';
/* import {LottieSplashScreen} from '@ionic-native/lottie-splash-screen/ngx'; */
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'; 

import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 /*  routerHidden =true;
  @ViewChild('splash', {static: false})splash: ElementRef; */


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

/*      setTimeout(() => {
       this.routerHidden = false;
       this.splash.nativeElement.style.display = 'none';
     },3000)
 */
  /*  setTimeout(() => {
      this.lottieSplashScreen.hide();
     }, 2500) */
    });
  } 

}
