import { SymbolsService } from './../../services/symbols.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private _symbolService:SymbolsService){}
currenciesSymbols:any
currenciesSymbolsArray:Array<string>=[]
ngOnInit():void{

  this._symbolService.getCurrenciesSymbol().subscribe(
    (res: any) => {
       this.currenciesSymbols=res.symbols;
       this.currenciesSymbolsArray=Object.keys(this.currenciesSymbols)
      console.log(this.currenciesSymbolsArray)
      /*  console.log(Object.keys(this.currenciesSymbols))*/
   });
}
}
