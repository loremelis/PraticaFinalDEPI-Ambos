import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { LogInPage } from '../pages/log-in/log-in';
import { PatientsListPage } from '../pages/patients-list/patients-list';
import { PatientDisplayPage } from '../pages/patient-display/patient-display';
import { AddPatientPage } from '../pages/add-patient/add-patient';
import { EditPatientPage } from '../pages/edit-patient/edit-patient';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { RegisterPage } from '../pages/register/register';
import { ObservationPage } from '../pages/observation/observation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LogInPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mi Perfil', component: UserProfilePage },
      { title: 'Lista de Pacientes', component: PatientsListPage },
      { title: 'Observaciones', component: ObservationPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
