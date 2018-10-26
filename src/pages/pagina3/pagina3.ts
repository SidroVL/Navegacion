import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html'
})
export class Pagina3Page {
  pais:any={};
  constructor(private NavParams:NavParams,
              private navCtrl:NavController) { 
      console.log(this.NavParams);
      this.pais=this.NavParams.get("pais");//etiqueta igual que en la otra pagina
      }
  
 IrAtras(){
    this.navCtrl.pop();
 }
 IrRoot(){
  this.navCtrl.popToRoot();
}
}
