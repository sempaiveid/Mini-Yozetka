import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipeService {
  currency: string = localStorage.getItem("select_currency") || "UAH";
  
  set_currency(value: string){
    this.currency = value;
    this.update_currency();
  }

  update_currency(){
    localStorage.setItem("select_currency", this.currency);
  }

  constructor() {
    this.update_currency();
  }
}
