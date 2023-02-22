import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/model/user'

@Component({
  selector: 'signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent {
  user!: User
  
    constructor(private router: Router, private userService: UserService) {}
  

    ngOnInit(): void {
      this.user = this.userService.getEmptyUser()
    }
  
    onSignup() {
        this.userService.login(this.user)
        this.router.navigate(['/'])
    }

}
