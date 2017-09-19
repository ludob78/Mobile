import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ModalContentPage} from "../pages/modal-content/modal-content";
import {TodoPage} from "../pages/todo/todo";
import {RequestFormPage} from "../pages/request-form/request-form";



@NgModule({
  declarations: [
    MyApp,
    ModalContentPage,
    HomePage,
    TodoPage,
    RequestFormPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalContentPage,
    TodoPage,
    RequestFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
