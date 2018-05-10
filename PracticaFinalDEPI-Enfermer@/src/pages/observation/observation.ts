import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observation } from '../../models/observation.model';
import { Observable } from 'rxjs/Observable';
import { ObservationService } from '../../services/observation.service';

/**
 * Generated class for the ObservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-observation',
  templateUrl: 'observation.html',
})
export class ObservationPage {

  observationList: Observable<Observation[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, private observationService: ObservationService) {

    this.observationList= this.observationService.getObservationList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val(),
          }))
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObservationPage');
  }

}
