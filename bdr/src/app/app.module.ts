import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { ContactComponent } from './components/homeContent/contact/contact.component';
import { AboutUsComponent } from './components/homeContent/about-us/about-us.component';
import { SeparatorComponent } from './components/homeContent/separator/separator.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { ParentComponent } from './components/parent/parent.component';
import { httpInterceptorProviders } from './interceptors';
import { AdminComponent } from './components/admin/admin.component';
import { WebNotificationComponent } from './components/web-notification/web-notification.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ContactComponent,
    AboutUsComponent,
    SeparatorComponent,
    SigninComponent,
    SignupComponent,
    AsideNavComponent,
    ParentComponent,
    AdminComponent,
    WebNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
],
  bootstrap: [AppComponent]
})
export class AppModule { }
