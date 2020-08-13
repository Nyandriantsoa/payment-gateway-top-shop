import { Component } from '@angular/core';
import { User } from '../app/domain/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payment-service';

  user : User = {
    username : localStorage.getItem("user"),
    password : localStorage.getItem("password")
  };

  authenticated = false;

  loadPage(){
    this.user = {
      username : localStorage.getItem("user"),
      password : localStorage.getItem("password")
    }

    this.authenticated = true;
  }

  logout(){
    this.user = null;
    localStorage.clear();
    this.authenticated = false;
  }

}

