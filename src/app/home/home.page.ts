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
      //window.location.href = '/home';
      this.showMyToast();
    }
  }

  async showMyToast() {
    const toast = await this.toastController.create({
      message: 'You password or username is inccorect',
      duration: 8000,
      position: 'middle'

    });
    await toast.present();
  }

}
