import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreditCard } from '../domain/credit-card';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  @Input()  cards: CreditCard[];
  @Input() type: String ;

  @Output() eventEmitter = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  refresh(){
    this.eventEmitter.emit();
  }

}
