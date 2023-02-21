import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Contact } from '../../model/contact'

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  @Input() contacts!: Contact[] | null
  // @Output() selectContact = new EventEmitter<string>()
  @Output() remove = new EventEmitter()
  
}
