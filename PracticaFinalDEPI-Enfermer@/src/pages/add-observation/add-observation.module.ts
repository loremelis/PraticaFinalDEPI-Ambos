import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddObservationPage } from './add-observation';

@NgModule({
  declarations: [
    AddObservationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddObservationPage),
  ],
})
export class AddObservationPageModule {}
