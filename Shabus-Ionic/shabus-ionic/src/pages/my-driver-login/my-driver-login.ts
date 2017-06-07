import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyClientPage } from '../my-client/my-client';//--------//

/**
 * Generated class for the MyDriverLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-driver-login',
  templateUrl: 'my-driver-login.html',
})
export class MyDriverLoginPage {

  
    username: string;
    password: string;
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDriverLoginPage');
  }


  login(){
    console.log(this.username);
    console.log(this.password);
    this.navCtrl.setRoot(MyClientPage);
  }





}
