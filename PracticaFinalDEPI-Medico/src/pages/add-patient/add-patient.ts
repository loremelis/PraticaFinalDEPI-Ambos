import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { PatientsListPage } from '../patients-list/patients-list';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

 import { storage } from 'firebase/app';


@IonicPage()
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {

  photoData: any;
  photoURL: any;
  myPhotoRef: any;

  currentPhoto;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private patientService: PatientService, public camera: Camera) {
     this.myPhotoRef= firebase.storage().ref('/profilePhotos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPatientPage');
  }

  addPatient(patient: Patient){
    this.patientService.addPatient(patient).then(ref => {
      this.navCtrl.setRoot('PatientsListPage', {key: ref.key});
    })
  }

  takePhoto(){

     const options: CameraOptions = {
        quality: 70,
        targetHeight: 600,
        targetWidth: 600,
        allowEdit : true,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

    this.camera.getPicture(options)
    .then(imagedata=>{
      this.photoData= imagedata;
      this.upload();
    })
  
  }

  upload(){
    this.myPhotoRef.child(this.udi()).child('photo.png')
    .putString(this.photoData, 'base64', {contentType:'image/png'})
    .then(savePhoto =>{
      this.photoURL=savePhoto.downloadURL;
      this.patient.avatar= this.photoURL;
    })
  }

  udi(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

}