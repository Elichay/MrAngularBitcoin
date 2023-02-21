import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
    // return this.http.get<number>(url).pipe(
    //   map(res => res)
    // )
    return this.getResault('RATE', url)
  }
  
  getMarketPrice() {
    const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    // return this.http.get<any>(url).pipe(
    //   map(res => res)
    //   )
      return this.getResault('MARKET_PRICE', url)
  }

  getConfirmedTransactions() {
    //what url to use?
    const url = ''
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }


  private getResault(type: string, url: string) {
    const resault = loadFromStorage(type)
    if (resault) return Promise.resolve(resault)
    return lastValueFrom(this.http.get<{ answer: string }>(url)
      .pipe(
        tap(res => saveToStorage(type, res)),
      ))
  }

}

  function saveToStorage(key: string, value: any) {
    const data: any = JSON.stringify(value) || null
    localStorage.setItem(key, data)
  }
  
  function loadFromStorage(key: string) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
  }
  

