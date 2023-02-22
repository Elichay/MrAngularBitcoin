import { Component, Input } from '@angular/core';
import { Transfer } from 'src/app/model/user';

@Component({
  selector: 'transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent {
  @Input() transfers !: Transfer[]
}
