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
  async presentAlertSheet(){
    const alert = await this.alertCtrl.create({
      message:"How do you feel the temperature in your zone right now <br> Note: Temperature in this room can vary between 18.5°C and 21.5°C",
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
