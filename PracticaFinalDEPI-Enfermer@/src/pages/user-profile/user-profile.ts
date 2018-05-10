import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/user.models"; 
import { UserService } from "../../services/user.services";

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  users: User[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private UserService: UserService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  onLoadNewPage(){
  }

  ionViewWillEnter(){
    this.users=this.UserService.getUsers();
  }

  onItemTapped($event, users){
    
  }

}
