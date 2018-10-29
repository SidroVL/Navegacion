import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre_mio: string="";
  edad_mio:number=0;//no es necesario que tenga el mismo nombre que en el json

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public vievCtrl: ViewController) {
                 this.nombre_mio=this.navParams.get("nombre");//esta vez si que tiene que ser igual al del json(ajustes)
                this.edad_mio=this.navParams.get("edad");
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrar_sin_parametros(){
    this.vievCtrl.dismiss();//hacer un pop 

  }

  cerrar_con_parametros(){
    let dato={
      nombre:"Lara",
      edad: 4,
      ubicacion:{
        longitud: 10,
        latitud: 43.444
      }

    }
    this.vievCtrl.dismiss(dato);
  }
}
