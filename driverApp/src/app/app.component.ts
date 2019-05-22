import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SessionStorageProvider } from './../providers/session-storage/session-storage';
import { EmployeeCodePage, MenuPage } from '../pages/index.paginas';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = EmployeeCodePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _sessionCtrl: SessionStorageProvider
  ) {
    platform.ready().then(() => {
      if (this._sessionCtrl.consultar_storage('driverId')==null) {
        this.rootPage = EmployeeCodePage;
      } else {
        this.rootPage = MenuPage;
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

