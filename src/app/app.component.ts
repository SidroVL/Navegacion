import { Ajustes2Page } from './../pages/ajustes2/ajustes2';
import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//import { PrincipalPage } from '../pages/principal/principal'; aunque ya se atenua

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  //pagina de entrada
   rootPage:any=TabsPage;


  //referencias para abrir en el menu lateral !!CUIDADO doble import
  tabs=TabsPage; 
  ajustes2=Ajustes2Page;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  abrirPagina(pagina:any){
    this.rootPage=pagina;

  }
}

