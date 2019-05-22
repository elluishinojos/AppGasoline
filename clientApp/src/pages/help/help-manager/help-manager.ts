import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HelpCenterPage, TermsConditionsPage, PrivacyPage } from '../../index.paginas';

@IonicPage()
@Component({
  selector: 'page-help-manager',
  templateUrl: 'help-manager.html',
})
export class HelpManagerPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  abrirPagina(pagina: string) {
    switch (pagina) {
      case 'help':
        this.navCtrl.push(HelpCenterPage);
        break;
      case 'terms':
        this.navCtrl.push(TermsConditionsPage);
        break;
      case 'privacy':
        this.navCtrl.push(PrivacyPage);
        break;
    }
  }

}
