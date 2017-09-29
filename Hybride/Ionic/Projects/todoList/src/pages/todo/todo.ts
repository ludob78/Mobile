import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {TododetailsPage} from "../tododetails/tododetails";
import {TodoProvider} from "../../providers/todoProviders";
import {ModaltodoPage} from "../modaltodo/modaltodo";
import {ModaladdtodoPage} from "../modaladdtodo/modaladdtodo";
import {AboutPage} from "../about/about";


/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {
  // Todolist: any[] = [
  //   {id: 1, titre: "Batman", body: "Super héros à cape et masque"},
  //   {id: 2, titre: "IronMan", body: "Super héros à armure qui vole"},
  //   {id: 3, titre: "Superman", body: "Super héros à cape qui vole"},
  //   {id: 4, titre: "Spiderman", body: "Super héros qui monte sur les murs"}
  //
  // ];
  PageDetails: any = TododetailsPage;
  PageAbout: any = AboutPage;
  selectedTodo: any;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public service: TodoProvider
    , public modalCtrl: ModalController
    , public actionSheetCtrl: ActionSheetController) {
    // console.log(this.navParams)
    console.log("ici constructeur")
  }

  ionViewDidLoad() {
    console.log("ici ionViewDidLoad")
    console.log('ionViewDidLoad TodoPage');
    this.service.getAllTodos().subscribe(arrayTodos => {
      console.log("arrayTodos:", arrayTodos);
      // les variables du service sont disponible dans les components qui appellent le service
      this.service.Todolist=arrayTodos;
      // this.Todolist = arrayTodos;

    })

  }

/*  itemSelected(todo) {
    this.navCtrl.push(this.PageDetails, todo);
    this.navCtrl.push(this.PageAbout,{todo:todo});

  }*/
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.service.getAllTodos().subscribe(arrayTodos => {
      console.log("arrayTodos:", arrayTodos);
      // les variables du service sont disponible dans les components qui appellent le service
      this.service.Todolist=arrayTodos;
      // this.Todolist = arrayTodos;

    })

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  openModal(todo) {
    if (todo != undefined) {
      let modal = this.modalCtrl.create(ModaltodoPage, todo);
      modal.present();
    } else {
      let modal = this.modalCtrl.create(ModaladdtodoPage);
      modal.present();
    }

  }

  swipeEvent(todo) {
    console.log("swipe");
    this.selectedTodo = todo;
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Action',
      buttons: [
        {
          text: 'Modifier',

          handler: () => {
            let modal = this.modalCtrl.create(ModaladdtodoPage,todo);
            modal.present();
          }
        }, {
          text: 'Supprimer',
          role: 'destructive',
          handler: () => {
            console.log("todo DeleteTodoById:",todo)
            this.service.DeleteTodoById(todo).subscribe(resultDelete =>{
              console.log("resultDelete:",resultDelete);
              // les variables du service sont disponible dans les components qui appellent le service
              this.service.Todolist=this.service.Todolist.filter((item)=>{
                return item.id!= todo.id;
              })
            })
          }
        }
      ]
    });
    actionSheet.present();
  }
}
