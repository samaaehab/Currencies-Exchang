import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {

  constructor(private _httpClient:HttpClient) { }
  private url='http://data.fixer.io/api/';
  private api_key='?access_key=096456fc98a7bbdadc9c43ad6368c544';

  public getCurrenciesSymbol() { return this._httpClient.get(this.url+`symbols`+this.api_key); }
}
