import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { Calendar } from "@ionic-native/calendar/ngx";

@Component({
  selector: 'app-seja-voluntario',
  templateUrl: './seja-voluntario.page.html',
  styleUrls: ['./seja-voluntario.page.scss'],
  providers: [NavParams]
})
export class SejaVoluntarioPage implements OnInit {


  calName = "";
  events = [];


  constructor(  public navCtrl: NavController,
    public navParams: NavParams,
    private calendar: Calendar,
    private plt: Platform) {


   this.calName = navParams.get('name');

    if (this.plt.is('ios')) {
      this.calendar.findAllEventsInNamedCalendar(this.calName).then(data => {
        this.events = data;
      });
    } else if (this.plt.is('android')) {
      let start = new Date();
      let end = new Date();
      end.setDate(end.getDate() + 31);

      this.calendar.listEventsInRange(start, end).then(data => {
        this.events = data;
      });
    } 
   }

  ngOnInit() {
  }

}
