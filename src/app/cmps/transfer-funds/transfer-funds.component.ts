import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Contact } from 'src/app/model/contact'
import { User } from 'src/app/model/user'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent {
  amount!: number
  @Input() contact !: Contact
  @Output() updateTransfers = new EventEmitter()
  user !: User

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser()
  }

  onSendTransfer() {
    this.userService.addTransfer(this.contact, this.amount)
    this.user = this.userService.getUser()
    this.amount = 0
    this.updateTransfers.emit()
  }
}
