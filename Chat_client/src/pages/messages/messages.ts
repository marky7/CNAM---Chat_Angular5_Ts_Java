import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesService } from './messages.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'messages-page',
  templateUrl: 'messages.html',
  providers: [ MessagesService, UsersService ],
})

export class MessagesPage {

  public userId: number;
  public contactId:number;

  public contact: object = {
    nom : '',
    prenom:'',
    id:''
  };
  public user: object = {
    nom : '',
    prenom:'',
    id:''
  };

  public content: string;
  public messages: any[] = [];
  public interval: any = null;

  constructor(public navCtrl: NavController, private navParams:NavParams, private messagesService: MessagesService, private usersService: UsersService) {
    this.userId = navParams.get('userId');
    this.contactId = navParams.get('receiverId');
    messagesService.userId = this.userId;

      // Get User connected
      usersService.getUser(this.userId).subscribe((user) => {
        this.user = user;
          // Get Contact connected
          usersService.getUser(this.contactId).subscribe((contact) => {
            this.contact = contact;
            messagesService.contact = contact;

            // Get messages from current conversation between users
            if(!this.interval){
              this.interval = setInterval(function(){
                messagesService.getMessagesOfConversation().subscribe((data) => {
                  console.log(data);
                    //this.messages = data;
                  if(Array.isArray(data)){
                    this.messages = [];
                    for(var i = 0; i<data.length; i++){
                      var sender: string;

                      if(data[i].senderId == this.contact.id){
                        sender = this.contact.prenom+' '+this.contact.nom;
                      }else{
                        sender = this.user.prenom+' '+this.user.nom;
                      }
                      this.messages.push({sender: sender, content: data[i].content, createdAt: data[i].createdAt });
                    }
                  }
                });
              }.bind(this), 1000);
            }

        },(error) => {
          console.log(error);
        });
      },(error) => {
        console.log(error);
      });
  }

  sendMessage(){
    this.messagesService.sendMessage({senderId:this.userId , receiverId:this.contactId, content: this.content}).subscribe((data) => {
      console.log(data);
    },(error) => {
    });;
  }


}
