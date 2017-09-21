import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TododetailsPage } from './tododetails';

@NgModule({
  declarations: [
    TododetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TododetailsPage),
  ],
})
export class TododetailsPageModule {}
