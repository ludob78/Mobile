import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModaltodoPage } from './modaltodo';

@NgModule({
  declarations: [
    ModaltodoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModaltodoPage),
  ],
})
export class ModaltodoPageModule {}
