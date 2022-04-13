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
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.infoServices.getAll()
      .subscribe(
        data => {
          this.infos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
