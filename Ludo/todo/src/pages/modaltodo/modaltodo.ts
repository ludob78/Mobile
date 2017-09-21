import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {TodoProvider} from "../../providers/todoProviders";
import {AboutPage} from "../about/about";

/**
 * Generated class for the ModaltodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modaltodo',
  templateUrl: 'modaltodo.html',
  styles:[`
  .orange{
    background-color: orange;
  }
  .orange:hover{
    background-color: darkorange;
  }
  `]
})
export class ModaltodoPage {
  todo:any;
  about:any=AboutPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public platform:Platform,public service:TodoProvider) {
  console.log("navParams in constr ModaltodoPage:",this.navParams)
    this.todo=this.navParams.data;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ModaltodoPage');
console.log("this.todo ionViewDidLoad:",this.todo)

  }
  // todo=[]
  dismiss() {
    this.viewCtrl.dismiss();
  }
  //Permet d'assigner une navigation sur une méthode
  envoiPage(){
    this.navCtrl.push(this.about);
  }

  /*  EditTodo(){

  }
  DeleteTodo(input){
    console.log("this.todo DeleteTodo:",input)
    this.service.DeleteTodoById(input.id).subscribe(resultDelete =>{
      console.log("resultDelete:",resultDelete);

    })
  }*/
}
