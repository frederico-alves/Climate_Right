import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { info } from 'console';
import { Information } from '../models/info.models';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  infos: Information[];
  public infoForm: FormGroup;
  currentInfo;
  id: any;
  name='';
  description='';


  //id: number;
  data: Information;
  //name: any;
  //description: any;
  constructor(private infoServices: InformationService,
    private route: ActivatedRoute,
    private router: Router ) { }


  ngOnInit(): void {
    this.retrieveInformations();
    //this.getInfo(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.params.id;
  }

  getInfo(id){
    this.infoServices.get(id)
    .subscribe(
      data=>{
        this.currentInfo=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }


editInfo(status){
  console.log(status);
  console.log(status.InfoName);
  // const statusID = parseInt(status.InfoId);
  status.isEdit = true;
  status.EditName = status.name;
  status.EditDescription = status.description;
 /* infotoEdit.isEdit =true;
  infotoEdit.EditName= infotoEdit.name;
  infotoEdit.EditDescription= infotoEdit.description;*/
/*   const data ={
    //id: this.currentInfo.id,
    name : this.currentInfo.name,
    description: this.currentInfo.description
  };
  this.infoServices.update(this.currentInfo.id, data)
  .subscribe(
    response =>{
      this.currentInfo =status;
      console.log(response);
    },
    error => {
      console.log(error);
    }); */
}


  updateInfo(statusRow){

    console.log("button clicked");
    let status = [];
     status['name'] = statusRow.EditName;
     status['description']= statusRow.EditDescription;

 this.infoServices.update(this.id, status).subscribe(
  data => {
    status = data as string[];
      console.log(data);
      //window.location.reload();
      //this.message = 'The tutorial was updated successfully!';
    },
    error => {
      console.log(error);
    });
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
<<<<<<< HEAD

  saveNewInfo() {
    const newInfoName = (<HTMLInputElement>document.getElementById('newInfoName')).value;
    const newInfoDescription = (<HTMLInputElement>document.getElementById('newInfoDescription')).value;
    const newInfoObject = {name: newInfoName, description: newInfoDescription};
=======
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
>>>>>>> 4891c63f22edd73b55fc9ee61da44cda4f9d45e7

    console.log(newInfoName);
    console.log(newInfoDescription);
    console.log(newInfoObject);

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

  deleteItem(id) {
    this.infoServices.delete(id).subscribe(data => {
      this.infos = data;
      console.log('DATA DELETED SUCCESSFULLY');
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
