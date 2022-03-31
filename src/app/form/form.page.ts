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
zones =['Zone 1','Zone 2','Zone 3','Zone 4','Zone 5','Zone 6','Zone 7','Zone 8','Zone 9','Zone 10','Zone 11','Zone 12','Zone 13','Zone 14','Zone 15','Zone 16'];

constructor( private actionSheetCtrl: ActionSheetController,
  private alertCtrl: AlertController,
  private toastController: ToastController) { }

  ngOnInit() {
  }

 /* async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
    
      }
    );
  }*/
  async presentAlertSheetTemperature(){
    const alert = await this.alertCtrl.create({
      message:"How do you feel the temperature in your zone right now <br> Note: Temperature in this room can vary between 18.5°C and 21.5°C",
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async presentAlertSheetAirQuality(){
    const alert = await this.alertCtrl.create({
      message:"How do you feel the polution level in your zone right now?<br>Very tired: the polution is high, you feel sleepy, tired.<br> Very energetic: the polution is low, you feel fresh and full of energy.<br>To give a good evaluation, lack of sleep or excessive physical activities should not be counted as factors of tiredness.",
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async presentAlertSheetHumidity(){
    const alert = await this.alertCtrl.create({
      message:"How do you feel the humidity in your zone right now?<br>Very dry: you feel your throat is dry.<br> Very muggy: clammy skin.<br>Note: Humidity in this room can vary between 60% and 80%",
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async showMyToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved',
      duration: 2000,
      position: 'bottom'
      
    });
    await toast.present();
  }

  

}

