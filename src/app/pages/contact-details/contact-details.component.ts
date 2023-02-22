import { Component, OnInit, Input } from '@angular/core'
import { lastValueFrom, Subscription } from 'rxjs'
import { Contact } from '../../model/contact'
import { ContactService } from 'src/app/services/contact.service'
import { ActivatedRoute, Router } from '@angular/router'
import { User, Transfer } from 'src/app/model/user'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }
  user !: User
  transfers !: Transfer[]

  // @Input() contactId!: string
  // contact!: Contact | undefined
  contact!: Contact
  subscription!: Subscription

  async ngOnInit() {

    // this.subscription = this.route.params.subscribe(async params => {
    //   const contact = await lastValueFrom(this.contactService.getContactById(params['id']))
    //   this.contact = contact
    // })

      this.subscription = this.route.data.subscribe(data => {
        this.contact = data['contact']
    })

    // const contact = await lastValueFrom(this.contactService.getContactById(this.contactId))
    // this.contact = contact
  }

  onBack() {
    this.router.navigateByUrl('contact')
    // this.router.navigate(['/', 'contact'])
  }

  updateTransfers() {
    this.user = this.userService.getUser()
    this.transfers = this.user.transfers.filter(transfer => transfer.toId === this.contact._id)
}



  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}