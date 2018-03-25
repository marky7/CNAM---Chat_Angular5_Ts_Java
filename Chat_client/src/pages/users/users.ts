import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from './users.service';

@Component({
  selector: 'users-page',
  templateUrl: 'users.html',
  providers: [ UsersService ],
})

export class UsersPage {

  users:any;

  constructor(public navCtrl: NavController, private usersService: UsersService) {
    //this.users = ['Invité','Aristide','Florian','MrVielle'];
    usersService.getUsers().subscribe((data) => {
        console.log(data);
        this.users = data;
        // this.users = ...
      });
  }
}

// Pour importer un service dans un component :
// Faire l'import du service
// Le mettre dans le tableau des providers du component
// L'ajouter dans le constructor
