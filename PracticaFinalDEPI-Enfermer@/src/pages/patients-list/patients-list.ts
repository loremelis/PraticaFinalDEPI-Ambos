import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPatientPage } from '../../pages/add-patient/add-patient';
import { PatientDisplayPage } from '../patient-display/patient-display';
import { Observable } from 'rxjs/Observable';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';

@IonicPage()
@Component({
  selector: 'page-patients-list',
  templateUrl: 'patients-list.html',
})
export class PatientsListPage {

  patientList: Observable<Patient[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private patientService: PatientService) {
    this.patientList= this.patientService.getPatientList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val(),
          }))
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsListPage');
  }


}
