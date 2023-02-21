import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, delay } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactService } from './contact.service';


@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Contact> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
      const id = route.params['id']
      return this.contactService.getContactById(id).pipe(delay(100))
  }
}
