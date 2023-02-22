import { Component, OnInit } from '@angular/core'
import { BitcoinService } from 'src/app/services/bitcoin.service'
import { Observable } from 'rxjs'
import { Data } from 'src/app/model/chart'

@Component({
  selector: 'chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  prices$!: Observable<Data>
  ngOnInit(): void {
      // this.prices$ = this.bitcoinService.getMarketPrice()
  }

}
