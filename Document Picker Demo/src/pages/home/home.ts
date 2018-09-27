import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DocumentPicker } from '@ionic-native/document-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private docPicker: DocumentPicker) {

    

  }

  openPicker(){
    this.docPicker.getFile('all')
    .then(uri => {
      console.log("-------->>>>>>>");
      console.log(uri)
    })
    .catch(e => console.log(e));
  }

}
