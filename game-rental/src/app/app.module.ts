import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { NavComponent } from './common/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
