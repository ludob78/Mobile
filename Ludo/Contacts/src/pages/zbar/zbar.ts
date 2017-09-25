import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ZBar, ZBarOptions} from "@ionic-native/zbar";

/**
 * Generated class for the ZbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zbar',
  templateUrl: 'zbar.html',
})
export class ZbarPage {
  result:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,private zBar:ZBar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZbarPage');
  }

  RaiseScan(){
    let options: ZBarOptions = {
      flash: 'off',
      drawSight: false
    };

    this.zBar.scan(options)
      .then(result => {
        console.log(result); // Scanned code
        this.result=result
      })
      .catch(error => {
        console.log(error); // Error message
      });
  }
}
