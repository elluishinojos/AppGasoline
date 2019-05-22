import { LoginFormPage } from './../pages/login/login-form/login-form';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SessionStorageProvider } from './../providers/session-storage/session-storage';
import { MenuPage } from '../pages/index.paginas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _sessionCtrl: SessionStorageProvider
  ) {
    platform.ready().then(() => {
        var existeUsuario = this._sessionCtrl.consultar_storage('usuario');
        if (existeUsuario== null) {
          this.rootPage = LoginFormPage;
        } else {
          this.rootPage = MenuPage;
        }
        statusBar.styleDefault();
        splashScreen.hide();
    });
   
  }
}

