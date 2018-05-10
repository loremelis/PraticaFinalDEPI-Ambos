import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveObservationPage } from './remove-observation';

@NgModule({
  declarations: [
    RemoveObservationPage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveObservationPage),
  ],
})
export class RemoveObservationPageModule {}
