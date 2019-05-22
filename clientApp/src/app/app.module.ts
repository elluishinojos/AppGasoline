
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'
//Providers
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule } from '@ionic/storage';
import { ConexionClienteProvider } from '../providers/conexion-cliente/conexion-cliente';
import { SessionStorageProvider } from "../providers/session-storage/session-storage";
// import { SocketIoModule, SocketIoConfig, Socket } from 'ng-socket-io';
import { ChatProvider } from './../providers/chat/chat';
//Pages
import {
  PhoneValidationPage,
  LoginFormPage,
  RegisterCredentialsPage,
  SelectGasStationPage,
  SelectClientLocationPage,
  CheckoutPage,
  OrderLogPage,
  DriverRatingPage,
  MenuPage,
  OrdersManagerPage,
  PastOrdersPage,
  PastOrdersDetailPage,
  UpcomingOrdersPage,
  UpcomingOrdersDetailPage,
  PaymentsManagerPage,
  PromotionsManagerPage,
  SettingsManagerPage,
  HelpManagerPage,
  HelpCenterPage,
  TermsConditionsPage,
  PrivacyPage,
  SubscriptionsManagerPage,
  ShowTicketPage,
  PaySubscriptionPage,
  PopoverPage,
  SelectGasolinePage,
  VehicleListPage,
  VehicleManagerPage,
  RegisterVehiclePage
} from '../pages/index.paginas';
import { ConexionNominatimProvider } from '../providers/conexion-nominatim/conexion-nominatim';
import { DatePipe } from '@angular/common';

//aquí va la ip con el broker de mensajes
// const config: SocketIoConfig = { url: 'http://172.18.137.40:3300', options: {} };

@NgModule({
  declarations: [
    MyApp,
    LoginFormPage,
    PhoneValidationPage,
    RegisterCredentialsPage,
    SelectGasStationPage,
    SelectClientLocationPage,
    CheckoutPage,
    OrderLogPage,
    DriverRatingPage,
    MenuPage,
    OrdersManagerPage,
    PastOrdersPage,
    PastOrdersDetailPage,
    UpcomingOrdersPage,
    UpcomingOrdersDetailPage,
    PaymentsManagerPage,
    PromotionsManagerPage,
    SettingsManagerPage,
    HelpManagerPage,
    HelpCenterPage,
    TermsConditionsPage,
    PrivacyPage,
    SubscriptionsManagerPage,
    ShowTicketPage,
    PaySubscriptionPage,
    PopoverPage,
    SelectGasolinePage,
    VehicleListPage,
    VehicleManagerPage,
    RegisterVehiclePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PhoneValidationPage,
    LoginFormPage,
    RegisterCredentialsPage,
    SelectGasStationPage,
    SelectClientLocationPage,
    CheckoutPage,
    OrderLogPage,
    DriverRatingPage,
    MenuPage,
    OrdersManagerPage,
    PastOrdersPage,
    PastOrdersDetailPage,
    UpcomingOrdersPage,
    UpcomingOrdersDetailPage,
    PaymentsManagerPage,
    PromotionsManagerPage,
    SettingsManagerPage,
    HelpManagerPage,
    HelpCenterPage,
    TermsConditionsPage,
    PrivacyPage,
    SubscriptionsManagerPage,
    ShowTicketPage,
    PaySubscriptionPage,
    PopoverPage,
    SelectGasolinePage,
    VehicleListPage,
    VehicleManagerPage,
    RegisterVehiclePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SessionStorageProvider,
    ConexionClienteProvider,
    ConexionNominatimProvider,
    DatePipe
  ]
})
export class AppModule { }
