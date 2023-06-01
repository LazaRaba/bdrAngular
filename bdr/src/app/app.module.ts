import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { ContactComponent } from './components/homeContent/contact/contact.component';
import { SliderComponent } from './components/homeContent/slider/slider.component';
import { AboutUsComponent } from './components/homeContent/about-us/about-us.component';
import { SeparatorComponent } from './components/homeContent/separator/separator.component';
import { SliderModule } from './components/homeContent/slider/slider.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ContactComponent,
    SliderComponent,
    AboutUsComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
