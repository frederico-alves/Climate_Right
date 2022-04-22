import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Information } from '../models/info.models';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  infos: Information[];
  constructor(private infoServices: InformationService, private alertCtrl: AlertController) { }


  ngOnInit(): void {
    this.retrieveInformations();
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
    });
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

  reloadPage(){
    window.location.reload();
  }
}
