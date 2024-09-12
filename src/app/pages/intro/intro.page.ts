import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor(private navCtrl: NavController) {}

  IrInicio() {
    this.navCtrl.navigateForward('/inicio');
  }
  
}
