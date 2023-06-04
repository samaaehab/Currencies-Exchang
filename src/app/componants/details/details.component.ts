import { SymbolsService } from './../../services/symbols.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  symbole:any;
  currenciesSymbols:any;
currenciesSymbolsArray:Array<string>=[];
fromCurrencyData:any;
toCurrencyData:any;
amountCurrencyData:any;
fromRate:any;
toRate:any;
convertResult:any;
convertDiscribtion:any;
exchangFrom:any;
exchangTo:any;
currenciesdescribtion:any;
currenciesdescribtionArray:Array<string>=[];
currencyTitle:any
constructor(private _activatedRoute:ActivatedRoute,private _symbolService:SymbolsService){}
ngOnInit(): void {
  this._activatedRoute.paramMap.subscribe(params => {
    this.symbole = params.get('cSymbol');
  });
  this._symbolService.getCurrenciesSymbol().subscribe(
    (res: any) => {
       this.currenciesSymbols=res.rates;
       this.currenciesSymbolsArray=Object.keys(this.currenciesSymbols)
     /* console.log(this.currenciesSymbols)*/
     /*console.log(Object.keys(this.currenciesSymbols))*/
   });
   this._symbolService.getCurrenciesdiscribtion().subscribe(
    (res: any) => {
       this.currenciesdescribtion=res.symbols;
      this.currencyTitle=this.currenciesdescribtion[this.symbole]
     /* console.log(this.currenciesdescribtion)*/
     
   });

}
convertCurrencies(fromCurrency:any,toCurrency:any,amountCurrency:any){
  this.fromCurrencyData=fromCurrency;
  this.toCurrencyData=toCurrency;
  this.amountCurrencyData=amountCurrency;
  /*console.log( this.fromCurrencyData,this.toCurrencyData,this.amountCurrencyData)*/
  this.fromRate=this.currenciesSymbols[this.fromCurrencyData];
  this.toRate=this.currenciesSymbols[this.toCurrencyData]
  /*console.log(this.fromRate,this.toRate);*/

 this.convertResult=(this.toRate/this.fromRate) * this.amountCurrencyData;
 /*console.log(this.convertResult);*/
 this.convertDiscribtion="1.00 "+ this.toCurrencyData + " = " + this.fromRate +" "+ this.fromCurrencyData;
}
exchangeCurrenciesSymbols(fromCurrency:any,toCurrency:any){
  this.exchangFrom=toCurrency;
  this.exchangTo=fromCurrency;
  
  }
}
