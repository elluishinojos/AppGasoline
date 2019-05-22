import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-help-center',
  templateUrl: 'help-center.html',
})
export class HelpCenterPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpCenterPage');
  }

}
