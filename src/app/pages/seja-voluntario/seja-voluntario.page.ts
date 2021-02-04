import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { Calendar } from "@ionic-native/calendar/ngx";

@Component({
  selector: 'app-seja-voluntario',
  templateUrl: './seja-voluntario.page.html',
  styleUrls: ['./seja-voluntario.page.scss'],
  providers: [NavParams]
})
export class SejaVoluntarioPage implements OnInit {

  @ViewChild('mySlider') mySlider: any;
 
  voluntario =  [
             {
               "img": "../../../assets/imagens/_DSC3950.jpg",
               "posicao": "2 ",
               /* "nome": "teste",
               "camisa": "4" */
             },
             {
               "img": "../../../assets/imagens/_DSC6197.jpg",
               "posicao": "3 ",
             /*   "nome": "teste",
               "camisa": "26" */
             },
             {
              "img": "../../../assets/imagens/_DSC7799.jpg",
              "posicao": "4 ",
            /*   "nome": "teste",
              "camisa": "26" */
            },
            {
              "img": "../../../assets/imagens/_DSC8050.jpg",
              "posicao": "5 ",
            /*   "nome": "teste",
              "camisa": "26" */
            }
             
           ]

           slideNext(){
            this.mySlider.slideNext();
          }
      
          slidePrev(){
            this.mySlider.slidePrev();
          }





/*   calName = "";
  events = []; */


  constructor(  public navCtrl: NavController,
    public navParams: NavParams,
    /* private calendar: Calendar,
    private plt: Platform */) {


  /*  this.calName = navParams.get('name');

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
    }  */
   }

  ngOnInit() {
  }

  /* função slide */



}
