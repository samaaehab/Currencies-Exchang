import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {

  constructor(private _httpClient:HttpClient) { }
  private url='http://data.fixer.io/api/';
  private api_key='?access_key=c581f2cef22e5f13754e826f45b800cc';

  public getCurrenciesSymbol() { return this._httpClient.get(this.url+`latest`+this.api_key); }
  public getCurrenciesdiscribtion() { return this._httpClient.get(this.url+`symbols`+this.api_key); }
 
}
