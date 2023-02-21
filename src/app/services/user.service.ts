import { Injectable } from '@angular/core'
import { User } from '../model/user'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private user: User = {
    name: 'Ochoa Hyde',
    coins: 100,
    moves: [
    ]
  }

  getUser() {
    return this.user
  }

}
