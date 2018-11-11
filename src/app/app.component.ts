import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsuarioPage } from '../pages/usuario/usuario';
import { CartillaPrestadoresPage } from '../pages/cartilla-prestadores/cartilla-prestadores';
import { EmergenciasPage } from '../pages/emergencias/emergencias';
import { FarmaciasPage } from '../pages/farmacias/farmacias';
import { CalendarioVacunaciNPage } from '../pages/calendario-vacunaci-n/calendario-vacunaci-n';
import { ContactoPage } from '../pages/contacto/contacto';


import { InicioPage } from '../pages/inicio/inicio';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = InicioPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToUsuario(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UsuarioPage);
  }goToCartillaPrestadores(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CartillaPrestadoresPage);
  }goToEmergencias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EmergenciasPage);
  }goToFarmacias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FarmaciasPage);
  }goToCalendarioVacunaciN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CalendarioVacunaciNPage);
  }goToContacto(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactoPage);
  }
}
