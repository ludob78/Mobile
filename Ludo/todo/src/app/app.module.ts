import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TodoPage} from "../pages/todo/todo";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {TododetailsPage} from "../pages/tododetails/tododetails";
import {SearchPage} from "../pages/search/search";
import {TodoProvider} from "../providers/todoProviders";
import {HttpModule} from "@angular/http";
import {ModaltodoPage} from "../pages/modaltodo/modaltodo";
import {ModaladdtodoPage} from "../pages/modaladdtodo/modaladdtodo";
import {Geolocation} from "@ionic-native/geolocation";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {GoogleMaps} from "@ionic-native/google-maps";
import {Camera} from "@ionic-native/camera";
import {PhotosPage} from "../pages/photos/photos";
import {NativeStorage} from "@ionic-native/native-storage";
import {PhotoViewer} from "@ionic-native/photo-viewer";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    TodoPage,
    ModaltodoPage,
    ModaladdtodoPage,
    TododetailsPage,
    SearchPage,
    PhotosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
     IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    TodoPage,
    ModaltodoPage,
    ModaladdtodoPage,
    TododetailsPage,
    SearchPage,
    PhotosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Geolocation,
  NativeGeocoder,
      GoogleMaps,
    Camera,
    PhotoViewer,
    NativeStorage,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider
  ]
})
export class AppModule {
}
