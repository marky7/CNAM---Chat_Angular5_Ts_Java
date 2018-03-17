import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'messages-page',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  public user:string;
  public contacts:string[];
  public messages:any[];

  constructor(public navCtrl: NavController) {
      // Get from pathUrl
      this.user = 'Florian';

      // Get Florian contacts
      this.contacts = ['Invité','Aristide','MrVielle'];

      // Get messages filtered by sender and receivers
      this.messages = [{
          creationDate : 1521320151015,
          sender : 'Aristide',
          receiver : 'Florian',
          content: 'Salut Florian c\'est Aristide, as-tu commencé à réviser tes examens ? Moi je suis à la plage avec des filles en bikini.'
      },{
          creationDate : 1521320159015,
          sender : 'Florian',
          receiver : 'Aristide',
          content: 'Salut Aristide ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },{
          creationDate : 152132219,
          sender : 'Aristide',
          receiver : 'Florian',
          content: 'Ok ! Je vais faire un concours de Beach Volley, on se reparle plus tard.'
      }];


  }

}
