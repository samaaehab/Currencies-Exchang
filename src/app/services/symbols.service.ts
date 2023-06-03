import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {

  constructor(private _httpClient:HttpClient) { }
  private url='http://data.fixer.io/api/';
  private api_key='?access_key=1f24289fcf669c3b6b47ecf99b7b4553';

  public getCurrenciesSymbol() { return this._httpClient.get(this.url+`latest`+this.api_key); }
 
}
