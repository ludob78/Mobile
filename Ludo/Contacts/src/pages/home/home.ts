import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactManagerProvider} from "../../providers/contact-manager/contact-manager";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactTab = [];
  myInput:string="";

  constructor(public navCtrl: NavController, public manageContact: ContactManagerProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad to get Contacts List from device');
    this.manageContact.getContactList().then(data => {
      console.log("this.manageContact.getContactList():", data);
      this.contactTab = data;
    })

  }

  SelectedContact(contact) {
    console.log("SelectedContact():", contact);
    this.manageContact.CurrentContactDetails=contact;
    console.log("",this.manageContact.CurrentContactDetails);
    // écrire le contact dans le provider contact manager
    this.manageContact.transToDto(contact)
  }


/*  itemToDisplay(contactTab) {
    let itemToDisplay:string;
    contactTab.name.formatted == null ? itemToDisplay = contactTab.name.formatted : itemToDisplay = contactTab.emails.formatted;
    return itemToDisplay;
  }*/
}
