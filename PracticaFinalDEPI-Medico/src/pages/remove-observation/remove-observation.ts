import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observation } from '../../models/observation.model';
import { ObservationService } from '../../services/observation.service';
import { ObservationPage } from '../observation/observation';

/**
 * Generated class for the RemoveObservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remove-observation',
  templateUrl: 'remove-observation.html',
})
export class RemoveObservationPage {

  observation: Observation = {
    paciente: '',
    observacion: '',
    hora: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private observationService: ObservationService) {

  }

  ionViewDidLoad() {
    this.observation = this.navParams.get('observation');
  }

  removeObservation(observation: Observation){
    this.observationService.removeObservation(observation).then(()=> {
      this.navCtrl.setRoot(ObservationPage);
    })
  }

}
