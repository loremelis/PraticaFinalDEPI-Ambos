import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientDisplayPage } from './patient-display';

@NgModule({
  declarations: [
    PatientDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientDisplayPage),
  ],
})
export class PatientDisplayPageModule {}
