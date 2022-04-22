import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  passwordInput: any;
  usernameInput: any;

  constructor() {}

  reloadPage(){
    window.location.reload();
  }

  login(){
    if(this.passwordInput === '123')
    {
    window.location.href = '/admin';
    }
    else {
      window.location.href = '/home';
    }
  }

}
