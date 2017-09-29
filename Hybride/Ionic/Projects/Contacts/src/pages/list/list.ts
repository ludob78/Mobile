import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ContactManagerProvider} from "../../providers/contact-manager/contact-manager";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  newContact={
    firstname:"",
    email:"",
    phone:""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public manageContact:ContactManagerProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  validateNewContact(e){
    e.preventDefault();
    this.manageContact.addContact(this.newContact).then(ContactData=>{
      console.log(ContactData);
      this.navCtrl.setRoot(HomePage)
    });

  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
