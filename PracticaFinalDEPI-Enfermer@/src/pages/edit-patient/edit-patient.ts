import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';
import { PatientsListPage } from '../patients-list/patients-list';

/**
 * Generated class for the EditPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-patient',
  templateUrl: 'edit-patient.html',
})
export class EditPatientPage {

  patient: Patient = {
    avatar: null,
    nombre: '',
    apellidos: '',
    dni: '',
    codigoidentificador: '',
    sexo: '',
    edad: '',
    lugarnacimiento: '',
    enfermedades: '',
    alergias: '',
    medicamentos: ''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private patientService: PatientService) {
  }

  ionViewDidLoad() {
    this.patient = this.navParams.get('patient');
  }


  savePatient(patient: Patient){
    this.patientService.editPatient(patient).then(()=> {
      this.navCtrl.setRoot(PatientsListPage);
    })
  }

  removePatient(patient: Patient){
    this.patientService.removePatient(patient).then(()=> {
      this.navCtrl.setRoot(PatientsListPage);
    })
  }

}
