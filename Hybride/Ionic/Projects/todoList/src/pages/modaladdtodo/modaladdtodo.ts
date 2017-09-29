import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {TodoProvider} from "../../providers/todoProviders";

/**
 * Generated class for the ModaladdtodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modaladdtodo',
  templateUrl: 'modaladdtodo.html',
})
export class ModaladdtodoPage {
  value_id:number;
  value_titre:string;
  value_description:string;


  constructor(public navCtrl: NavController
              , public navParams: NavParams
              ,public viewCtrl:ViewController
              ,public platform:Platform
              ,public service:TodoProvider
  ) {
  console.log("this.navParams ModaladdtodoPage:",this.navParams)
    // récupérer les valeurs venant du swipe modifier
    this.value_id=this.navParams.data.id;
    this.value_titre=this.navParams.data.titre;
    this.value_description=this.navParams.data.description;
    console.log("this.value_id:",this.value_id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModaladdtodoPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  EditTodo(){
    let data_object={
      id:this.value_id,
      titre:this.value_titre
      ,description:this.value_description
    };
    this.service.UpdateTodo(data_object).subscribe(ResultUpdate=>{
      console.log("ResultUpdate:",ResultUpdate);
      this.service.Todolist.push(ResultUpdate);
      // this.dismiss();
    })
  }
  AddTodo(){

   let data_object={
     titre:this.value_titre
     ,description:this.value_description
   };
    console.log("AddTodo ModaladdtodoPage:",data_object);
    this.service.AddTodo(data_object).subscribe(ResultInsert=>{
      console.log("ResultInsert:",ResultInsert);
      // les variables du service sont disponible dans les components qui appellent le service
      this.service.Todolist.push(ResultInsert);
      console.log("this.service.Todolist in Addtodo:",this.service.Todolist)
      // this.dismiss();
    })
  }
}
