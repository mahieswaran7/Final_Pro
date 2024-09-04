import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
//import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   //HomeComponent,
    RoomsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
     // Import ngx-bootstrap Carousel module
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
