import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'MrAngularBitcoin';

  selectedCmp:string = 'Contact'
  // selectedCmp = 'Home'


  selectCmp(cmpName: string) {
    this.selectedCmp = cmpName;
}



}
