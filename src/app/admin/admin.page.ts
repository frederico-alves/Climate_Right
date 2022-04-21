import { Component, OnInit } from '@angular/core';
import { Information } from '../models/info.models';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  infos: Information[];
  constructor(private infoServices: InformationService) { }


  ngOnInit(): void {
    this.retrieveInformations();
  }

  retrieveInformations(): void {
    this.infoServices.getAll()
      .subscribe(
        data => {
          this.infos = data;
          console.log('DATA RECEIVED FROM MYSQL DATABASE:', data);
        },
        error => {
          console.log(error);
        });
  }

  updateData(){
    // const infoData = (document.querySelectorAll('.info-data'));
    const infoData = (document.querySelectorAll('#data1'));
    console.log(infoData);
    // console.log(infoId);
  }

  updateDefaultData1(){
    const id1 = (<HTMLInputElement>document.getElementById('data1')).id;
    const info1 = (<HTMLInputElement>document.getElementById('data1')).value;
    const info1object = {id:1, name:'Temperature', description: info1};
    // console.log(info1object);
    // console.log(id1);

    this.infoServices.update(1, info1object).subscribe(
      data => {
        this.infos = data;
        console.log('DATA DEFAULT 1 UPDATED SUCCESSFULLY');
        window.location.reload();
      },
      error => {
        console.log(error);
    });
  }

  updateDefaultData2(){
    const id2 = (<HTMLInputElement>document.getElementById('data2')).id;
    const info2 = (<HTMLInputElement>document.getElementById('data2')).value;
    const info2object = {id:2, name:'AirQuality', description: info2};
    // console.log(info2object);
    // console.log(id2);

    this.infoServices.update(2, info2object).subscribe(
      data => {
        this.infos = data;
        console.log('DATA DEFAULT 2 UPDATED SUCCESSFULLY');
        window.location.reload();
      },
      error => {
        console.log(error);
    });
  }
  updateDefaultData3(){
    const id3 = (<HTMLInputElement>document.getElementById('data3')).id;
    const info3 = (<HTMLInputElement>document.getElementById('data3')).value;
    const info3object = {id:3, name:'Humidity', description: info3};
    console.log(info3object);
    console.log(id3);

    this.infoServices.update(3, info3object).subscribe(
      data => {
        this.infos = data;
        console.log('DATA DEFAULT 3 UPDATED SUCCESSFULLY');
        window.location.reload();
      },
      error => {
        console.log(error);
    });
  }

  saveNewInfo() {
    const newInfoName = (<HTMLInputElement>document.getElementById('newInfoName')).value;
    const newInfoDescription = (<HTMLInputElement>document.getElementById('newInfoDescription')).value;
    const newInfoObject = {name: newInfoName, description: newInfoDescription};

    console.log(newInfoName);
    console.log(newInfoDescription);
    console.log(newInfoObject);

    this.infoServices.create(newInfoObject).subscribe(
      data => {
        // this.infos = newInfoObject.description;
        this.infos = data;
        // this.infos = data.description;
        console.log('DATA CREATED SUCCESSFULLY');
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
