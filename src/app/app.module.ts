import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalsComponent } from './partials/modals/modals.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { ContactComponent } from './partials/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalsComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
