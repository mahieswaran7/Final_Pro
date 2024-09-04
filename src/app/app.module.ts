import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   //HomeComponent,
    RoomsComponent,
    ContactComponent,
    FooterComponent,
    PartnersComponent,
 
  
   
  ],
  imports: [
    BrowserModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
