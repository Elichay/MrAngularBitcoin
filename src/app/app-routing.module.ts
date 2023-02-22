import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { environment } from 'src/environments/environment.development'
// import { environment } from 'src/environments/environment'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { ChartPageComponent } from './pages/chart-page/chart-page.component'
import { ContactDetailsPageComponent } from './pages/contact-details/contact-details.component'
import { ContactEditPageComponent } from './pages/contact-edit/contact-edit.component'
import { AuthGuard } from './guards/auth.guard'
import { ContactResolver } from './services/contact.resolver'
import { SignupComponent } from './pages/sign-up/sign-up.component'

const routes: Routes = [


  {
    path: 'contact', component: ContactPageComponent, children:
      [
        {
          path: 'edit/:id',
          component: ContactEditPageComponent,
          canActivate: [AuthGuard],
          resolve:{contact: ContactResolver}
        },
        {
          path: 'edit',
          component: ContactEditPageComponent,
          canActivate: [AuthGuard]
        },
      ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsPageComponent,
    canActivate: [AuthGuard],
    resolve:{contact: ContactResolver}
  },
  { path: 'charts', component: ChartPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
