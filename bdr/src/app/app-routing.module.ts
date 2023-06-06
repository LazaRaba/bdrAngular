import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/homeContent/contact/contact.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AboutUsComponent } from './components/homeContent/about-us/about-us.component';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
  {
    path:"",
    component: ContainerComponent,
    pathMatch:'full'
  },
  {
    path:"aboutus",
    component:AboutUsComponent,
    pathMatch:'full'
  },
  {
    path:"contact",
    component: ContactComponent,
  },
  {
    path:"signin",
    component: SigninComponent,
    pathMatch:'full'

  },
  {
    path:"signup",
    component: SignupComponent,
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
