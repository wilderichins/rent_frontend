import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { NavComponent } from './common/nav/nav.component';
import { ListingComponent } from './common/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    NavComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
