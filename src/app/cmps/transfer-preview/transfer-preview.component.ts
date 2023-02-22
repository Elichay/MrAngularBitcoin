import { Component, Input } from '@angular/core'
import { Transfer } from 'src/app/model/user'

@Component({
  selector: 'transfer-preview',
  templateUrl: './transfer-preview.component.html',
  styleUrls: ['./transfer-preview.component.scss']
})
export class TransferPreviewComponent {
  @Input() transfer !: Transfer
}
