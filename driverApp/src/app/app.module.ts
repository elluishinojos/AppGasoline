import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//Plugins
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { IonicStorageModule } from '@ionic/storage';
//Provider
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ConexionDriverProvider } from '../providers/conexion-driver/conexion-driver';
// import { SocketIoModule, SocketIoConfig, Socket } from 'ng-socket-io';
// import { ChatProvider } from './../providers/chat/chat';
//Pages
import { MyApp } from './app.component';
import {
  DriverOrderPage,
  DriverOrderCompletedPage,
  DriverRatingPage,
  LobbyPage,
  HelpPage,
  HelpCenterPage,
  PrivacyPage,
  TermsConditionsPage,
  EmployeeCodePage,
  PasswordPage,
  MenuPage,
  PastOrdersPage,
  PastOrdersDetailPage,
  UpcomingOrdersPage,
  UpcomingOrdersDetailPage,
  NavigationSettingsPage,
  SettingsPage,
  AcceptOrderPage,
  MyOrdersPage,
  ShowTicketPage,
  DriverRegisterPage,
  VehicleRegisterPage,
  VehicleManagerPage
} from '../pages/index.paginas';
import { SessionStorageProvider } from '../providers/session-storage/session-storage';
// import { OrdersProvider } from '../providers/orders/orders';
import { ConexionFirebaseProvider } from '../providers/conexion-firebase/conexion-firebase';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBrWbPgAuybslFhz2XrdFHkG3fxvAF6Hgk",
    authDomain: "gasify-33a56.firebaseapp.com",
    databaseURL: "https://gasify-33a56.firebaseio.com",
    projectId: "gasify",
    storageBucket: "gasify.appspot.com",
    messagingSenderId: "176563371862"
};
@NgModule({
  declarations: [
    MyApp,
    DriverOrderPage,
    DriverOrderCompletedPage,
    DriverRatingPage,
    LobbyPage,
    HelpPage,
    HelpCenterPage,
    PrivacyPage,
    TermsConditionsPage,
    EmployeeCodePage,
    PasswordPage,
    MenuPage,
    PastOrdersPage,
    PastOrdersDetailPage,
    UpcomingOrdersPage,
    UpcomingOrdersDetailPage,
    NavigationSettingsPage,
    SettingsPage,
    AcceptOrderPage,
    MyOrdersPage,
    ShowTicketPage,
    DriverRegisterPage,
    VehicleRegisterPage,
    VehicleManagerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG,'gasify'),
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DriverOrderPage,
    DriverOrderCompletedPage,
    DriverRatingPage,
    LobbyPage,
    HelpPage,
    HelpCenterPage,
    PrivacyPage,
    TermsConditionsPage,
    EmployeeCodePage,
    PasswordPage,
    MenuPage,
    PastOrdersPage,
    PastOrdersDetailPage,
    UpcomingOrdersPage,
    UpcomingOrdersDetailPage,
    NavigationSettingsPage,
    SettingsPage,
    AcceptOrderPage,
    MyOrdersPage,
    ShowTicketPage,
    DriverRegisterPage,
    VehicleRegisterPage,
    VehicleManagerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConexionDriverProvider,
    LaunchNavigator,
    Geolocation,
    Camera,
    ImagePicker,
    SessionStorageProvider,
    // ChatProvider,
    // OrdersProvider,
    ConexionFirebaseProvider
  ]
})
export class AppModule { }
