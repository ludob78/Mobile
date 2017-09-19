import { Component } from '@angular/core';
import {ModalController,NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import { AlertController  } from 'ionic-angular';
import {ModalContentPage} from "../modal-content/modal-content";
import {TodoPage} from "../todo/todo";
import {RequestFormPage} from "../request-form/request-form";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  home_tab: any;
  contact_tab: any;
  // about_tab: any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public modalCtrl: ModalController) {
    this.home_tab = TodoPage;
    // this.about_tab = Tab2;
    this.contact_tab = RequestFormPage;
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}

