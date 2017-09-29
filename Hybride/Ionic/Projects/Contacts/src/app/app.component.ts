import {Component, ViewChild} from '@angular/core';
import {ModalController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {ContactManagerProvider} from "../providers/contact-manager/contact-manager";
import {UpdateFormPage} from "../pages/update-form/update-form";
import {ZbarPage} from "../pages/zbar/zbar";
import {EmailPage} from "../pages/email/email";
import {SMS} from "@ionic-native/sms";
import {MygalleryPage} from "../pages/mygallery/mygallery";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  updatePage: any = UpdateFormPage;
  text_value: any;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
    , public manageContact: ContactManagerProvider
    , public ModalCont: ModalController
    , private sms: SMS) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Create contact', component: ListPage},
      {title: 'Scan', component: ZbarPage},
      {title: 'ListEmail', component: EmailPage},
      {title: 'My Gallery', component: MygalleryPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.nav.setRoot(page.component);
  }

  openEdit() {
    this.ModalCont.create(this.updatePage, {contact: {test: "test value"}}).present()
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  sendSms(text_value) {
    event.preventDefault()
    console.log("this.manageContact.CurrentContactDetails.phoneNumbers[0].value:", this.manageContact.CurrentContactDetails.phoneNumbers[0].value)
    console.log("text_value:", text_value)
    // Send a text message using default options
    if (text_value != null || !this.manageContact.CurrentContactDetails.phoneNumbers[0]) {
      this.sms.send(this.manageContact.CurrentContactDetails.phoneNumbers[0].value, text_value);
      this.text_value = "";
    }
    else {
      console.log('il manque au moins 1 element sms')
    }
  }
}
