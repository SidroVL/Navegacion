import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrls: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }
  activarPrinicpal(){
    this.navCtrl.parent.select(0) //parent se refiere a la pagina justo encima tabs en este caso??
  }

  mostrarModal(){     //inyectar modalcontroller
    //let modal =this.modalCtrls.create(ModalPage);  sin pasar datos 
    let modal =this.modalCtrls.create(ModalPage, {nombre:"Dolores", edad: 24});
    modal.present() //lo hace visible
     
    //para obtener los parámeotros de vuelta
    modal.onDidDismiss((parametros)=>{
      console.log("Datos de vuelta");
      console.log(parametros);
    });//() no recibe datos (es la funcion que se puede declarar ahi mismo o no)
  }
  

}
