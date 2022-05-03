import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActionSheetController, AlertController, Gesture, GestureController, IonItem, ToastController } from '@ionic/angular';
import { Button } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Information } from '../models/info.models';
import { InformationService } from '../services/information.service';
import { CheckboxControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

public genders = ['Male', 'Female', 'Non-Binary'];
public zones =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
infos: Information[];

zoneGroup: any;
temperatureGroup: any;
airQualityGroup: any;
humidityGroup: any;
genderGroup: any;

constructor(
  public http: HttpClient,
  private alertCtrl: AlertController,
  private toastController: ToastController,
  private infoServices: InformationService,
  private gestureCtrl: GestureController) { }

  ngOnInit(): void {
    this.retrieveInformations();
  }

  retrieveInformations(): void {
    this.infoServices.getAll()
      .subscribe(
        data => {
          this.infos = data;
          console.log(data);
          console.log(data.length);
        },
        error => {
          console.log(error);
        });
  }

PostDataAPI(){
    console.log('SUBMIT BUTTON WORKS');
    let YourHeaders = {'Content-Type':'application/json'};

    let zone = this.zoneGroup;
    let Temperature = this.temperatureGroup;
    let Humidity = this.humidityGroup;
    let AirQuality = this.airQualityGroup;
    let Identifier = this.genderGroup;

    zone = parseInt(zone);
    Temperature = parseInt(Temperature);
    Humidity = parseInt(Humidity);
    AirQuality = parseInt(AirQuality);

    if (Identifier === 'Male'){
      Identifier = 'M';
    }
    if (Identifier === 'Female'){
      Identifier = 'F';
    }
    if (Identifier === 'Non-Binary'){
      Identifier = 'O';
    }

    console.log(Identifier);

    let postData = {
      zone,
      Temperature,
      Humidity,
      AirQuality,
      Identifier
    }

    console.log(postData);

    // POSTING DATA IN THE API METHOD
    this.http.post('https://climate-right.azurewebsites.net/input', postData, {headers: YourHeaders})
      .subscribe(data => {
        console.log(data);
        console.log('DATA POSTED IN THE API');
       }, error => {
        console.log(error);
      });
  }

  async presentAlertSheetTemperature(){
    const alert = await this.alertCtrl.create({
      message:this.infos[0].description,
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async presentAlertSheetAirQuality(){
    const alert = await this.alertCtrl.create({
      message:this.infos[1].description,
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async presentAlertSheetHumidity(){
    const alert = await this.alertCtrl.create({
      message:this.infos[2].description,
      buttons :[{ text :'ok', role :'cancel'}]
    });
    await alert.present();
  }
  async showMyToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved',
      duration: 5000,
      position: 'bottom'

    });
    await toast.present();
  }

  dragdrop(){
    console.log('dragdrop1');
    const draggableElements = document.querySelectorAll('.draggable');
    const droppableElements = document.querySelectorAll('.droppable');

    draggableElements.forEach(elem => {
      elem.addEventListener('dragstart', dragStart);
    });

    droppableElements.forEach(elem => {
      elem.addEventListener('dragenter', dragEnter);
      elem.addEventListener('dragover', dragOver);
      elem.addEventListener('dragleave', dragLeave);
      elem.addEventListener('drop', drop);
    });

    // Drag and Drop Functions

    //Events fired on the drag target

    function dragStart(event) {
      event.dataTransfer.setData('text', event.target.id);
    }

    //Events fired on the drop target

    function dragEnter(event) {
      if(!event.target.classList.contains('dropped')) {
        event.target.classList.add('droppable-hover');
      }
    }

    function dragOver(event) {
      if(!event.target.classList.contains('dropped')) {
        event.preventDefault(); // Prevent default to allow drop
      }
    }

    function dragLeave(event) {
      if(!event.target.classList.contains('dropped')) {
        event.target.classList.remove('droppable-hover');
      }
    }

    function drop(event) {
      event.preventDefault();
      event.target.classList.remove('droppable-hover');
      const draggableElementData = event.dataTransfer.getData('text');
      const droppableElementData = event.target.getAttribute('data-draggable-id');
      const isCorrectMatching = draggableElementData === droppableElementData;
      if(isCorrectMatching) {
        const draggableElement = document.getElementById(draggableElementData);
        event.target.classList.add('dropped');

        event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
        draggableElement.classList.add('dragged');
        draggableElement.setAttribute('draggable', 'false');
        event.target.insertAdjacentHTML('afterbegin', `<i class="fas fa-${draggableElementData}"></i>`);
      }
    }
  }

}

