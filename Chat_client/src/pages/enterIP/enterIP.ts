import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'enter-ip',
  templateUrl: 'enterIP.html',
})

export class EnterIP {


  public nav: NavController;
  public currentIP: string = localStorage.getItem('currentIP') || 'localhost';
  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  goToUsers() {
    this.nav.push('users');
  }

  setCurrentServerIp(ip:string){
    if(this.currentIP){
      console.log(this.currentIP);
      localStorage.setItem('currentIP', this.currentIP);
      this.goToUsers();
    }
  }

}
