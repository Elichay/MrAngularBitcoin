import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { Contact } from '../../model/contact'
import { ContactService } from 'src/app/services/contact.service'


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  contacts$!: Observable<Contact[]>
  // selectedContactId: string = ''

  constructor(private contactService: ContactService ) { }

// contacts!: Contact[]
// contacts$: Observable<Contact[]> = new Observable<Contact[]>()
// subscription!: Subscription


  ngOnInit() {
    // this.contactService.loadContacts({term: ''})
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    
  }


  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
}


//   onSelectContactId(contactId:string) {
//     console.log('contactId:', contactId)
//     this.selectedContactId = contactId
// }


  ngOnDestroy(): void {
  }

}


