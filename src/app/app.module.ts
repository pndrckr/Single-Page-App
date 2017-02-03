import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { routing } from './app.routing';
import { ContactComponent } from './contact/contact.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactComponent } from './components/pages/contact/contact.component';




@NgModule({
  declarations: [ 
    AppComponent, NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent, ContactComponent, ContactComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
