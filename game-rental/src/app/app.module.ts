import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ListingComponent } from './common/listing/listing.component';
import { NavComponent } from './common/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent,
    NavComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
