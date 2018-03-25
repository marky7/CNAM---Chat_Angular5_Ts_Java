import { Component } from '@angular/core';
import { ConversationsService } from './conversations.service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'conversations-page',
  templateUrl: 'conversations.html',
  providers: [ ConversationsService ],
})

export class ConversationsPage {

  public contacts: Object[] = [];
  public messages:any[];
  public user:any;
  public userId: number;
  public nav:NavController;

  constructor(public navCtrl: NavController, private navParams:NavParams, private conversationsService: ConversationsService) {
    this.userId = navParams.get('userId');
    this.nav = navCtrl;
    //on suppose quel'on connait l'user courant
    //son id = 4;
    conversationsService.getUsers().subscribe((data) => {
        if(Array.isArray(data)){
          console.log(data);
            for(var i=0; i<data.length; i++){
              if(data[i].id !== this.userId){
                this.contacts.push(data[i]);
              }else{
                this.user = data[i];
              }
            }
        }
      });
    }

  goToMessages(contact:any) {
    console.log(contact);
    this.nav.push('messages',{
      userId:this.userId,
      receiverId:contact.id
    });
  }


}
