import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HelpCenterPage, TermsConditionsPage, PrivacyPage } from '../../index.paginas';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(
    public navCtrl: NavController
  ) {
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
