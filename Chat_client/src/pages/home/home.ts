import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myNav') nav: NavController
  // Set default page here
  public rootPage: any = 'enterIP';

  constructor(public navCtrl: NavController) {}

}
