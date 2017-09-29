import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PhotoLibrary} from "@ionic-native/photo-library";

/**
 * Generated class for the MygalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mygallery',
  templateUrl: 'mygallery.html',
})
export class MygalleryPage {
  url_img:any;
  name_img:any;
  ImgUrlList:any[]=[];
  ImgThumbUrlList:any[]=[];
  NameList:any[]=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private photoLib:PhotoLibrary) {
    var that=this;
    this.photoLib.requestAuthorization().then(() => {
      this.photoLib.getLibrary().subscribe({
        next: library => {
          library.forEach(function(libraryItem) {
            console.log(libraryItem.id);          // ID of the photo
            console.log(libraryItem.photoURL);    // Cross-platform access to photo
            that.ImgUrlList.push(libraryItem.photoURL);
            console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            that.ImgThumbUrlList.push(libraryItem.thumbnailURL);
            console.log(libraryItem.fileName);
            that.NameList.push(libraryItem.fileName);
            console.log(libraryItem.width);
            console.log(libraryItem.height);
            console.log(libraryItem.creationDate);
            console.log(libraryItem.latitude);
            console.log(libraryItem.longitude);
            console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
      .catch(err => console.log('permissions weren\'t granted'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MygalleryPage');
  }

}
