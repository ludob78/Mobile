import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {NativeStorage} from "@ionic-native/native-storage";
import {PhotoViewer} from "@ionic-native/photo-viewer";
// problème sur la compilation
// https://stackoverflow.com/questions/41451100/android-build-error-upon-upgrading-cordova-camera-plugin/41577344
/**
 * Generated class for the PhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
  styles:[
    //`ion-card{width: 100px;height: 100px;}`
   ]
})
export class PhotosPage {
  public base64Image: string;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.ALLMEDIA,
    sourceType: 1,
    saveToPhotoAlbum:true,
    correctOrientation:true
  };

  constructor(public navCtrl: NavController
              , public navParams: NavParams
              , private camera: Camera
              ,private nativeStor:NativeStorage
  ,private pictview:PhotoViewer
  ) {
    console.log('constructeur PhotosPage')

    // this.getCamera(options);
  }

  getCamera(options) {
    console.log('methode getCamera')
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    // this.nativeStor.
      // this.base64Image = 'data:image/jpeg;URI,' + imageData;
      // console.log("imageData:",imageData)
      console.log("this.base64Image:",this.base64Image)
    }, (err) => {
      console.log("error:", err)
    });
  }
   displayPicture()
   {
     const options: CameraOptions ={sourceType: 2,quality: 100,encodingType: this.camera.EncodingType.JPEG}
     this.camera.getPicture(options).then((imageData)=>{
       console.log("imageData from displayPicture:",imageData);
       // return imageData;
     })
   }
  showPicture(base64Image){
    this.pictview.show(base64Image,'My Image');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosPage');
  }

}
