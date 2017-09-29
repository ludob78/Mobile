import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactManagerProvider } from '../providers/contact-manager/contact-manager';
import {Contacts} from "@ionic-native/contacts";
import {FormsModule} from "@angular/forms";
import {UpdateFormPage} from "../pages/update-form/update-form";
import {EmailPage} from "../pages/email/email";
import {ZbarPage} from "../pages/zbar/zbar";
import {ZBar} from "@ionic-native/zbar";
import {EmailComposer} from "@ionic-native/email-composer";
import {SMS} from "@ionic-native/sms";
import {MygalleryPage} from "../pages/mygallery/mygallery";
import {PhotoLibrary} from "@ionic-native/photo-library";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UpdateFormPage,
    EmailPage,
    MygalleryPage,
    ZbarPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UpdateFormPage,
    EmailPage,
    MygalleryPage,
    ZbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ZBar,
    SMS,
    EmailComposer,
    PhotoLibrary,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactManagerProvider,
    Contacts
  ]
})
export class AppModule {}
