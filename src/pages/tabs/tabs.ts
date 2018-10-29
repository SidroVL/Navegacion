import { AjustesPage } from './../ajustes/ajustes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1:any;
  tab2:any;

  constructor() {
    this.tab1=PrincipalPage;
    this.tab2=AjustesPage;
  }

 

}
