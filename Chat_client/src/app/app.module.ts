import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, DeepLinkConfig } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import {UIRouterModule} from "@uirouter/angular";
//import {uiRouterConfigFn} from "../configs/router.config";
import { HttpClientModule } from '@angular/common/http';
// import {Transition} from "@uirouter/angular";
//import { RouterModule, Routes , ParamMap} from '@angular/router';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { ConversationsPage } from '../pages/conversations/conversations';
import { MessagesPage } from '../pages/messages/messages';
import { EnterIP } from '../pages/enterIP/enterIP';

export const deepLinkConfig: DeepLinkConfig = {
    links: [
        { component: EnterIP, name: "enterIP", segment: "enterIP"},
        { component: UsersPage, name: "users", segment: "users"},
        { component: ConversationsPage, name: "conversations", segment: "user/:userId/conversations" },
        { component: MessagesPage, name: "messages", segment: "user/:userId/conversation/:receiverId" }
    ]
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    ConversationsPage,
    MessagesPage,
    EnterIP
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{},deepLinkConfig),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    ConversationsPage,
    MessagesPage,
    EnterIP
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
