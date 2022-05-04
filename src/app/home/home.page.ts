import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  passwordInput: any;
  usernameInput: any;

  constructor( private toastController: ToastController ) {}

  reloadPage(){
    window.location.reload();
  }

  login(){
    if(this.passwordInput === '123' && this.usernameInput === 'admin')
    {
    window.location.href = '/admin';
    }
    else {
      this.showLoginErrorToast();
    }
  }

  async showLoginErrorToast() {
    const toast = await this.toastController.create({
      header: 'INVALID CREDENTIAL',
      message: 'Your password or username is incorrect, please try again.',
      duration: 9000,
      position: 'top',
      cssClass: 'toast-error-class',
      buttons: [
       {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('');
          }
        }
      ]
    });
    await toast.present();
  }

}
