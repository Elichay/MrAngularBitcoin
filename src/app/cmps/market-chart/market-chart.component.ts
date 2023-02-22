import { Component, Input } from '@angular/core'
import { BitcoinService } from 'src/app/services/bitcoin.service'
import { Data, Value } from 'src/app/model/chart'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

@Component({
  selector: 'market-chart',
  templateUrl: './market-chart.component.html',
  styleUrls: ['./market-chart.component.scss']
})
export class MarketChartComponent {
  constructor(private bitcoinService: BitcoinService) { }
  @Input() prices!: Data
  async ngOnInit() {
      const pricesValues = this.prices.values.splice(this.prices.values.length - 30)
      var marketPrice = new Chart("market-price", {
          type: 'line',
          data: {
              labels: this.getDates(pricesValues),
              datasets: [{
                  label: 'Market Price last 30 days',
                  data: this.getData(pricesValues),
                  tension: 0.1,
              }]
          },
      });
  }

  getDates(values: Value[]) {
      return values.map(value => {
          const date = new Date(value.x * 1000)
          return (date.getMonth() + 1) + '-' + (date.getDate() + 1)
      })
  }
  getData(values: Value[]) {
      return values.map(value => value.y)
  }
}


