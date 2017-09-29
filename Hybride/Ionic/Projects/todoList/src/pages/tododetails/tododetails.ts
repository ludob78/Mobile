import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TododetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tododetails',
  templateUrl: 'tododetails.html',
  styles:[`
    .body{
      width: 100%;
      padding: 5px;
      background-color: #8c8c8c;
      text-align: center;
    }
  `]
})
export class TododetailsPage {
  todo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todo=this.navParams.data;
    console.log("this.navParams TododetailsPage:",this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TododetailsPage');
  }

}
