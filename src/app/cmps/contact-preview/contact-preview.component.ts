import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {

  constructor(private router: Router){}

  @Input() contact!: Contact
  // @Output() selectContact = new EventEmitter<string>()
  @Output() remove = new EventEmitter()

  // onSelectContactId() {
  //   this.selectContact.emit(this.contact._id)
  // }

  onRemoveContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.remove.emit(this.contact._id)
}


onEditContact(ev: MouseEvent) {
  ev.stopPropagation()
  // this.router.navigateByUrl(`contact/edit/${this.contact._id}`)
  this.router.navigate(['contact/edit', this.contact._id])
}

}
