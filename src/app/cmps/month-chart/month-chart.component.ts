import { Component, OnInit } from '@angular/core'
// import { ChartType } from 'angular-google-charts'
import { BitcoinService } from '../../services/bitcoin.service'
import { Value } from '../../model/chart'


@Component({
  selector: 'month-chart',
  templateUrl: './month-chart.component.html',
  styleUrls: ['./month-chart.component.scss']
})
export class MonthChartComponent implements OnInit {
  constructor(
    private bitcoinService: BitcoinService,
    ) { }

  chartType: string = 'ColumnChart'
  chartData: any[][] = []
  
  chartOptions = {
    title: 'Bitcoin Price Index',
    width: 900,
    height: 500,
  }


  async ngOnInit() {
    const prices = await this.bitcoinService.getMarketPrice()
    console.log('prices', prices)
    const chartData = []
    chartData.push(['Name', 'Value'])
    prices.values.forEach((value: Value) => {
      chartData.push([value.x, value.y])
    })
    this.chartData = chartData
    
    // let chartData = {
    //   type: 'PieChart',
    //   data: {
    //     labels: this.getMonthNames(prices.values),
    //   }
    // }
    // console.log('chartData', chartData)
  }


  getMonthNames(values: Value[]) {
    return values.reduce((acc: string[], value) => {
      const date = new Date(value.x * 1000)
      if (!acc.includes(getMonthName(date))) acc.push(getMonthName(date))
      return acc
    }, [])
  }

}

function getMonthName(date: Date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
  return monthNames[date.getMonth()]
}
