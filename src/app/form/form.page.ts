import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Button } from 'protractor';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

public genders= ['Male', 'Female', 'Non-Binary'];
public zones =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

constructor( private alertCtrl: AlertController,
  private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentAlertSheetTemperature(){
    const alert = await this.alertCtrl.create({
      message:"How do you feel the temperature in your zone right now <br><br>Note: Temperature in this room can vary between 18.5°C and 21.5°C",
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async presentAlertSheetAirQuality(){
    const alert = await this.alertCtrl.create({
      message:"How do you feel the polution level in your zone right now?<br><br>Very tired: the polution is high, you feel sleepy, tired.<br><br>Very energetic: the polution is low, you feel fresh and full of energy.<br><br>To give a good evaluation, lack of sleep or excessive physical activities should not be counted as factors of tiredness.",
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async presentAlertSheetHumidity(){
    const alert = await this.alertCtrl.create({
      message:"How do you feel the humidity in your zone right now?<br><br>Very dry: you feel your throat is dry.<br> Very muggy: unpleasantly warm and humid, clammy skin.<br><br>Note: Humidity in this room can vary between 60% and 80%",
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async showMyToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved',
      duration: 3000,
      position: 'bottom'

    });
    await toast.present();
  }



}

