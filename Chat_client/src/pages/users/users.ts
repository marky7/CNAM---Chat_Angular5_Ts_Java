import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from './users.service';


@Component({
  selector: 'users-page',
  templateUrl: 'users.html',
  providers: [ UsersService ],
})

export class UsersPage {

  public href: string = "";

  users:any;
  nav:NavController;

  constructor(public navCtrl: NavController,private usersService: UsersService) {
    this.nav = navCtrl;
    //this.users = ['Invité','Aristide','Florian','MrVielle'];
    this.usersService = usersService;

    usersService.getUsers().subscribe((data) => {
        console.log(data);
        this.users = data;
      },(error) => {
        console.log(error);
      });
  }

  goToConversations(user:any) {
    console.log(user);
    this.nav.push('conversations', {
      userId: user.id
    });
  }

}

// Pour importer un service dans un component :
// Faire l'import du service
// Le mettre dans le tableau des providers du component
// L'ajouter dans le constructor
