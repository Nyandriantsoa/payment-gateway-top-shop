import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../domain/credit-card';
import { CreditCardService } from '../services/credit-card.service'

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent implements OnInit {

  cards : CreditCard[] = [];
  type : string = "Visa"

  getUrl : string = "http://localhost:8088/visa-api";

  constructor(private creditCardService : CreditCardService) { }

  ngOnInit(): void {
    if(this.cards.length === 0){
      this.refreshCards();
    }
  }

  refreshCards(){
    this.cards = [];
    this.creditCardService.getCreditCards(this.getUrl).subscribe(
      (response) => {
        this.cards = [ ... response];
      }, (error) => {
        console.log(error)
      }

    );
  }

}
