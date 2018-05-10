import {Patient} from "../models/patient.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class PatientService{
    
    private patientListRef = this.db.list<Patient>('patient');
    
    constructor(private db: AngularFireDatabase){
    }

    getPatientList(){
        return this.patientListRef;
    }

    addPatient(patient: Patient){
        return this.patientListRef.push(patient);
    }

    editPatient (patient: Patient){
        return this.patientListRef.update(patient.key, patient);
    }

    removePatient (patient: Patient){
        return this.patientListRef.remove(patient.key);
    }



}