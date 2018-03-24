import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from './users.service';

@Component({
  selector: 'users-page',
  templateUrl: 'users.html',
  providers: [ UsersService ],
})
export class UsersPage {

  users:string[];

  constructor(public navCtrl: NavController,private usersService: UsersService) {
    this.users = ['Invité','Aristide','Florian','MrVielle'];
    usersService.getUsers().subscribe((data) => {
        // Ce que tu veux faire des USERS ICI
        console.log('Données Users récupérées ICI - Le lien est configurable dans le fichier users.service.ts');
        console.log(data);
        // this.users = ...
      });
  }



}
