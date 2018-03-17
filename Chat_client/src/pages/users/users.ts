import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'users-page',
  templateUrl: 'users.html'
})
export class UsersPage {

  public users:string[];
  constructor(public navCtrl: NavController) {
    this.users = ['Invité','Aristide','Florian','MrVielle'];
  }

}
