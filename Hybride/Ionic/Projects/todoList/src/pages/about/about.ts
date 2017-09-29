import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent} from "@ionic-native/google-maps";
import {Geolocation} from "@ionic-native/geolocation";
import {NativeGeocoder, NativeGeocoderReverseResult} from "@ionic-native/native-geocoder";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  // ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps --variable API_KEY_FOR_ANDROID="AIzaSyCr0ybhEQvVvWgpB258C6HnrR4MyaMLBSA" --variable API_KEY_FOR_IOS="AIzaSyCr0ybhEQvVvWgpB258C6HnrR4MyaMLBSA"
//cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyCr0ybhEQvVvWgpB258C6HnrR4MyaMLBSA" --variable API_KEY_FOR_IOS="AIzaSyCr0ybhEQvVvWgpB258C6HnrR4MyaMLBSA"
//   API_key_GGMap:string="AIzaSyCr0ybhEQvVvWgpB258C6HnrR4MyaMLBSA"
//   chrome://inspect/#devices
//   https://github.com/mapsplugin/cordova-plugin-googlemaps/issues/1319
//   Activer les googles Maps Android API et Google Places API for iOS sur les interfaces API et services de votre compte google
//   https://console.developers.google.com/apis/api/maps_android_backend/overview?project=fair-solution-172308&duration=PT1H
  map: GoogleMap;
  mapElement: HTMLElement;
  pos: any = {lat: 1, lon: 1};
  addr: any;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private googleMaps: GoogleMaps
    , public geoloc: Geolocation
    , public geocoder: NativeGeocoder) {
    this.geoloc.getCurrentPosition().then((resp) => {
      this.pos.lat = resp.coords.latitude;
      this.pos.lon = resp.coords.longitude;
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
    console.log('ionViewDidLoad AboutPage');
    this.loadMap();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.loadMap();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          // lat: 43.0741904,
          lat: this.pos.lat,
          // lng: -89.3809802
          lng: this.pos.lon
        },
        zoom: 18,
        tilt: 30
      }, gestures: {
        scroll: true,
        tilt: true,
        zoom: true,
        rotate: true,
      },
      controls: {
        /**
         * Turns the compass on or off.
         */
        compass: true,
        /**
         * Turns the myLocation picker on or off. If turns on this button, the application displays a permission dialog to obtain the geolocation data.
         */
        myLocationButton: true,
        /**
         * Turns the indoor picker on or off.
         */
        indoorPicker: true,
        /**
         * Turns the map toolbar on or off. This option is for Android only.
         */
        mapToolbar: true
      }

    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    console.log('this.map:',this.map);
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: this.pos.lat,
            lng: this.pos.lon
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }
}
