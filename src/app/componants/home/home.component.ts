import { SymbolsService } from './../../services/symbols.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private _symbolService:SymbolsService){}
currenciesSymbols:any;
currenciesSymbolsArray:Array<string>=[];
fromCurrencyData:any;
toCurrencyData:any;
amountCurrencyData:any;
fromRate:any;
toRate:any;
convertResult:any;
convertDiscribtion:any;
ngOnInit():void{

  this._symbolService.getCurrenciesSymbol().subscribe(
    (res: any) => {
       this.currenciesSymbols=res.rates;
       this.currenciesSymbolsArray=Object.keys(this.currenciesSymbols)
      console.log(this.currenciesSymbols)
     console.log(Object.keys(this.currenciesSymbols))
   });
 
 
}

getCurrencyData(fromCurrency:any,toCurrency:any,amountCurrency:any){
  this.fromCurrencyData=fromCurrency;
  this.toCurrencyData=toCurrency;
  this.amountCurrencyData=amountCurrency;
  /*console.log( this.fromCurrencyData,this.toCurrencyData,this.amountCurrencyData)*/
  this.fromRate=this.currenciesSymbols[this.fromCurrencyData];
  this.toRate=this.currenciesSymbols[this.toCurrencyData]
  /*console.log(this.fromRate,this.toRate);*/

 this.convertResult=(this.toRate/this.fromRate) * this.amountCurrencyData;
 /*console.log(this.convertResult);*/
 this.convertDiscribtion="1.00"+ this.toCurrencyData + "=" + this.fromRate +  this.fromCurrencyData;
}
}
