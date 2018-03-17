import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'conversations-page',
  templateUrl: 'conversations.html'
})
export class ConversationsPage {

  public contacts:string[];
  public user:string;
  public messages:any[];

  constructor(public navCtrl: NavController) {
      this.user = 'Florian';
      // Get contacts
      this.contacts = ['Invité','Aristide','MrVielle'];

      this.messages = [{
          creationDate : 1521320151015,
          sender : 'Aristide',
          receiver : 'Florian',
          content: 'Salut Florian je suis Aristide'
        }];

  }

}
