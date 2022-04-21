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
