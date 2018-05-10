import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observation } from '../../models/observation.model';
import { ObservationService } from '../../services/observation.service';
import { Patient } from '../../models/patient.model';

/**
 * Generated class for the AddObservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-observation',
  templateUrl: 'add-observation.html',
})
export class AddObservationPage {

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


  observation: Observation = {
    paciente: '',
    observacion: '',
    hora: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private observationService: ObservationService) {
  }

  ionViewDidLoad() {
    this.patient = this.navParams.get('patient');
  }

  addObservation(observation: Observation){
    observation.paciente= this.patient.nombre.concat(" ").concat(this.patient.apellidos);
    this.observationService.addObservation(observation).then(ref => {
      this.navCtrl.setRoot('ObservationPage', {key: ref.key});
    })
  }

}
