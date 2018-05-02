import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username="";
  password="";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  goToWelcome(){

      if(this.username == "admin" && this.password == "1234") {

        this.navCtrl.setRoot('WelcomePage')

      }
      else { let alert = this.alertCtrl.create({
        title: 'You are not welcomed here.',
        subTitle: 'Leave.',
        buttons: ['NOW']
      });
      alert.present();

    

  }

}

}