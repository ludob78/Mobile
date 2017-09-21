import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {NativeGeocoder, NativeGeocoderReverseResult} from "@ionic-native/native-geocoder";


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  pos: any = {lat: 1, lon: 1};
  addr: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public geoloc: Geolocation,
              public geocoder: NativeGeocoder) {
    this.geoloc.getCurrentPosition().then((resp) => {
      this.pos.lat = resp.coords.latitude;
      this.pos.lon = resp.coords.longitude
      console.log("this.pos.lat,this.pos.lat:", this.pos.lat, this.pos.lat)

      this.geocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude).then((result: NativeGeocoderReverseResult) => {
        this.addr = result;
        console.log(JSON.stringify(this.addr))
      })
    }).catch((error) => {
      console.log('Error getting location', error)
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');


  }

}
