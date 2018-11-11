import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { UsuarioPage } from '../pages/usuario/usuario';
import { CartillaPrestadoresPage } from '../pages/cartilla-prestadores/cartilla-prestadores';
import { EmergenciasPage } from '../pages/emergencias/emergencias';
import { FarmaciasPage } from '../pages/farmacias/farmacias';
import { CalendarioVacunaciNPage } from '../pages/calendario-vacunaci-n/calendario-vacunaci-n';
import { ContactoPage } from '../pages/contacto/contacto';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    UsuarioPage,
    CartillaPrestadoresPage,
    EmergenciasPage,
    FarmaciasPage,
    CalendarioVacunaciNPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    UsuarioPage,
    CartillaPrestadoresPage,
    EmergenciasPage,
    FarmaciasPage,
    CalendarioVacunaciNPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}