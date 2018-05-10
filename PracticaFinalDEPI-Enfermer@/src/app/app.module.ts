import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LogInPage } from '../pages/log-in/log-in';
import { PatientsListPage } from '../pages/patients-list/patients-list';
import { PatientDisplayPage } from '../pages/patient-display/patient-display';
import { AddPatientPage } from '../pages/add-patient/add-patient';
import { EditPatientPage } from '../pages/edit-patient/edit-patient';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { RegisterPage} from '../pages/register/register';

import { PatientService } from '../services/patient.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../services/user.services';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PatientsListPageModule } from '../pages/patients-list/patients-list.module';
import { EditPatientPageModule } from '../pages/edit-patient/edit-patient.module';
import { AddPatientPageModule } from '../pages/add-patient/add-patient.module';
import { PatientDisplayPageModule } from '../pages/patient-display/patient-display.module';

import { Camera } from '@ionic-native/camera';
import { ObservationService } from '../services/observation.service';
import { ObservationPage } from '../pages/observation/observation';
import { ObservationPageModule } from '../pages/observation/observation.module';
import { RemoveObservationPage } from '../pages/remove-observation/remove-observation';
import { RemoveObservationPageModule } from '../pages/remove-observation/remove-observation.module';
import { AddObservationPage } from '../pages/add-observation/add-observation';
import { AddObservationPageModule } from '../pages/add-observation/add-observation.module';

export const firebaseConfig = {
  apiKey: "AIzaSyDHUu70-8yFCqzlk3wZ7kn7oupdUmF1PTc",
  authDomain: "practica-final-depi2.firebaseapp.com",
  databaseURL: "https://practica-final-depi2.firebaseio.com",
  projectId: "practica-final-depi2",
  storageBucket: "practica-final-depi2.appspot.com",
  messagingSenderId: "830328964411"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    UserProfilePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'practica-final-depi2'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PatientsListPageModule,
    AddPatientPageModule,
    EditPatientPageModule,
    PatientDisplayPageModule,
    ObservationPageModule,
    RemoveObservationPageModule,
    AddObservationPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    PatientsListPage,
    PatientDisplayPage,
    AddPatientPage,
    EditPatientPage,
    UserProfilePage,
    RegisterPage,
    ObservationPage,
    RemoveObservationPage,
    AddObservationPage
  ],
  providers: [
    UserService,
    StatusBar,
    SplashScreen,
    PatientService,
    ObservationService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
