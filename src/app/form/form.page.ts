import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

public genders= ['Male', 'Female', 'Non-Binary'];
zones =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

constructor( private actionSheetCtrl: ActionSheetController,
  private alertCtrl: AlertController) { }

  ngOnInit() {
  }

 /* async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
    
      }
    );
  }*/
  async presentAlertSheet(){
    const alert = await this.alertCtrl.create({
      message:"How do you feel the temperature in your zone right now <br> Note: Temperature in this room can vary between 18.5°C and 21.5°C",
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
}
