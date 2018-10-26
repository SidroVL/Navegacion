import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';

/**
 * Generated class for the Principal2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal2',
  templateUrl: 'principal2.html',
})
export class Principal2Page {

  paises:any[]=[
    {pais: "Francia", capital:"Paris"}
    ,{pais: "Japón", capital:"Tokyo"}
    ,{pais: "Madagascar", capital:"Antananarivo"}

  ]
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Principal2Page');
  }

  irPagina3(p:any){

    console.log(p);
    this.navCtrl.push(Pagina3Page, {"pais":p});//metodo pasando un parametro
  }
}
