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
          console.log('DATA RECEIVED FROM MYSQL DATABASE:');
        },
        error => {
          console.log(error);
        });
  }

  saveData(){
    let id1 = (<HTMLInputElement>document.getElementById('1')).id;
    let info1 = (<HTMLInputElement>document.getElementById('1')).value;
    let info1_object = {id:1, description: info1};

    let id2 = (<HTMLInputElement>document.getElementById('2')).id;
    let info2 = (<HTMLInputElement>document.getElementById('2')).value;
    let info2_object = {id:2, description: info2};

    let id3 = (<HTMLInputElement>document.getElementById('3')).id;
    let info3 = (<HTMLInputElement>document.getElementById('3')).value;
    let info3_object = {id:3, description: info3};


    // console.log(info1_object);
    // console.log(info2_object);
    // console.log(info3_object);

    // console.log(id1);
    // console.log(info1);
    // console.log(id2);
    // console.log(info2);
    // console.log(id3);
    // console.log(info3);

    this.infoServices.update(1, info1_object).subscribe(
      data => {
        this.infos = data.description;
      },
      error => {
        console.log(error);
    });

    this.infoServices.update(2, info2_object).subscribe(
      data => {
        this.infos = data.description;
      },
      error => {
        console.log(error);
    });

    this.infoServices.update(3, info3_object).subscribe(
      data => {
        this.infos = data.description;
      },
      error => {
        console.log(error);
    });
  }

  cancelChanges(){
    window.location.reload();
  }

}
