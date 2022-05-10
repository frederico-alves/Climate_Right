import { Component, OnInit } from '@angular/core';
import { Information } from '../models/info.models';;
import { InformationService } from '../services/information.service';
import { Hightemperature } from '../models/hightemperature.model';
import { HightemperatureService } from '../services/hightemperature.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  infos: Information[];
  //infoList =[];
  //info: Information;

  highTemps: Hightemperature[];


  constructor(
    private infoServices: InformationService,
    private highServices: HightemperatureService,
    private toastController: ToastController) { }

  ngOnInit(): void {
    this.retrieveInformations();
    this.retrieveHighTemperatureData();

  }

  retrieveInformations(): void {
    this.infoServices.getAll()
      .subscribe(
        data => {
          this.infos = data;
          console.log('DATA RECEIVED FROM MYSQL DATABASE:');
        },
        error => {
          console.log(error);
        });
  }

  saveNewInfo() {
    const newInfoName = (<HTMLInputElement>document.getElementById('newInfoName')).value;
    const newInfoDescription = (<HTMLInputElement>document.getElementById('newInfoDescription')).value;
    const newInfoObject = {name: newInfoName, description: newInfoDescription};

    this.infoServices.create(newInfoObject).subscribe(
      data => {
        this.infos = data;
        console.log('DATA CREATED SUCCESSFULLY');
        window.location.reload();
      },
      error => {
        console.log(error);
        this.showAddErrorToast();
    });
  }

  async showAddErrorToast() {
    const toast = await this.toastController.create({
      header: 'ALL THE FIELDS ARE REQUIRED',
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

  deleteItem(id) {
    this.infoServices.delete(id).subscribe(
      data => {
        this.infos = data;
        console.log('DATA DELETED SUCCESSFULLY');
        window.location.reload();
      },
      error => {
        console.log(error);
    });
  }

  updateItem(id, name, description) {
    const infoObject = {id, name, description};
    this.infoServices.update(id, infoObject).subscribe(
      data => {
        this.infos = data;
        console.log('DATA UPDATED SUCCESSFULLY');
        window.location.reload();
      },
      error => {
        console.log(error);
    });
  }

  retrieveHighTemperatureData(): void {
    this.highServices.getAll()
      .subscribe(
        data => {
          this.highTemps = data;
          console.log('DATA ABOUT HIGH TEMPERATURE RECEIVED FROM MYSQL DATABASE:', data);
        },
        error => {
          console.log(error);
        });
  }


  reloadPage(){
    window.location.reload();
  }
}
