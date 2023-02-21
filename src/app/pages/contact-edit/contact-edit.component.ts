import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
) { }
contact!: Contact
subscription!: Subscription


ngOnInit(): void {

    this.subscription = this.route.data.subscribe(({ contact }) => {
        this.contact = contact || this.contactService.getEmptyContact() as Contact
        console.log('this.contact', this.contact)
    })

}

async onAddContact() {
    try {
        await this.contactService.saveContact(this.contact)
        this.router.navigateByUrl('contact')
    } catch (err) {
        console.log('err:', err)
    }

}


ngOnDestroy(): void {
    this.subscription.unsubscribe()
}
}
