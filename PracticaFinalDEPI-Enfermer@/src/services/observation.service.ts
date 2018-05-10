import {Observation} from "../models/observation.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class ObservationService{
    
    private observationListRef = this.db.list<Observation>('observation');
    
    constructor(private db: AngularFireDatabase){
    }

    getObservationList(){
        return this.observationListRef;
    }

    addObservation(observation: Observation){
        return this.observationListRef.push(observation);
    }

    editObservation (observation: Observation){
        return this.observationListRef.update(observation.key, observation);
    }

    removeObservation (observation: Observation){
        return this.observationListRef.remove(observation.key);
    }



}