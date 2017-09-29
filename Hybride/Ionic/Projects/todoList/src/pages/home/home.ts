import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AlertController  } from 'ionic-angular';
import {TodoPage} from "../todo/todo";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";
import {PhotosPage} from "../photos/photos";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  home_tab: any;
  contact_tab: any;
  about_tab: any;
  photo_tab:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    this.home_tab = TodoPage;
    this.about_tab = AboutPage;
    this.contact_tab = ContactPage;
    this.photo_tab=PhotosPage;

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }


}

