import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';
import { LoginService } from '../services/login.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService , private router : Router) { }

  ngOnInit(): void {
  }

  currentUser : User = new User();
  @Output() eventEmitter = new EventEmitter();

  submit(form : NgForm){
    
    this.currentUser.username = form.value.login;
    this.currentUser.password = form.value.pass;

    if(this.currentUser.username.trim().length !== 0 && 
      this.currentUser.password.trim().length !== 0){
        
        this.loginService.authenticate(this.currentUser, () => {
          localStorage.setItem("user" , this.currentUser.username);
          localStorage.setItem("password" , this.currentUser.password);
          this.router.navigateByUrl(this.router.url);
          this.eventEmitter.emit();
        });
        return false;

    }

  }

}
