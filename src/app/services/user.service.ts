import { Injectable } from '@angular/core'
import { User } from '../model/user'
import { Transfer } from '../model/user'
import { Contact } from '../model/contact'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_STORAGE_KEY = 'users'
  private STORAGE_KEY_LOGGEDIN_USER = 'user'

  constructor() {
    this.createUsers()
    this.curUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
   }

  private curUser: User
  // private curUser: User = {
  //   name: 'Ochoa Hyde',
  //   coins: 100,
  //   transfers: [
  //   ]
  // }

  // getUser() {
  //   return this.curUser
  // }
  private createUsers() {
    let users = loadFromStorage(this.USER_STORAGE_KEY)
    if (!users || !users.length) {
      users = [
        {
          _id: 'u1001',
          name: "Ochoa Hyde",
          bitCoin: 100,
          transfers: []
        }
      ]
      saveToStorage(this.USER_STORAGE_KEY, users)
    }
  }


  addFunds(amount: number): void {
    this.curUser.bitCoin += amount
    localStorage.setItem('curUser', JSON.stringify(this.curUser))
  }
    

  // signup(name: string): void {
  //   this.curUser = { name: name, bitCoin: 100, transfers: [] as Transfer[]}
  //   localStorage.setItem('curUser', JSON.stringify(this.curUser))
  // }
  public getUser(): User {
    return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) as string)
  }

  private getUsers() {
    return loadFromStorage(this.USER_STORAGE_KEY)
  }

  public login(user: User): void {
    const users = this.getUsers()
    const loggedInUser = users.find(currUser => currUser.name === user.name)
    if (loggedInUser) this.saveLocalUser(loggedInUser)
    else {
      user = this.save(user)
      this.saveLocalUser(user)
    }
  }


  addTransfer(contact: Contact, amount: number): void {
    const transfer: Transfer = {
      toId: contact._id || '',
      to: contact.name,
      at: Date.now(),
      amount: amount
    }
    this.curUser.bitCoin -= amount
    this.curUser.transfers.unshift(transfer)
    localStorage.setItem('curUser', JSON.stringify(this.curUser))
  }

  public getEmptyUser() {
    return {
      name: '',
      bitCoin: 100,
      transfers: [],
    }
  }
  private save(user: User): User {
    let users = this.getUsers()
    if (user._id) users = users.map(currUser => currUser._id === user._id ? user : currUser)
    else {
      user._id = makeId()
      users.push(user)
    }
    saveToStorage(this.USER_STORAGE_KEY, users)
    return user
  }

  private saveLocalUser(user: User) {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }
}

function saveToStorage(key: string, value: any) {
  const data: any = JSON.stringify(value) || null
  localStorage.setItem(key, data)
}

function loadFromStorage(key: string): User[] {
  let data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function makeId(length = 5) {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

