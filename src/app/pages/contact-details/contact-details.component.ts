import { Component, OnInit, Input } from '@angular/core'
import { lastValueFrom, Subscription } from 'rxjs'
import { Contact } from '../../model/contact'
import { ContactService } from 'src/app/services/contact.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


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

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}