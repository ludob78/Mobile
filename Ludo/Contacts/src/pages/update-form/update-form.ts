import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactManagerProvider} from "../../providers/contact-manager/contact-manager";
import {ContactField, ContactName} from "@ionic-native/contacts";

/**
 * Generated class for the UpdateFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-form',
  templateUrl: 'update-form.html',
})
export class UpdateFormPage {
  newContact={
    firstname:"",
    email:"",
    phone:""
  };
  contact;
  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public manageContact:ContactManagerProvider
  ) {
    this.contact=this.navParams.get('contact');
    this.manageContact.transToDto(this.manageContact.CurrentContactDetails)
  this.newContact=this.manageContact.contactDto;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateFormPage');
  }
  updateContact(event){
    this.manageContact.updateContact(this.newContact)
  }

}
